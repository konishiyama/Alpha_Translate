import flask
from flask import request, make_response, jsonify
from flask_cors import CORS

import torch
import unicodedata
import re
import random
from lang import prepareData
from model import encoder, att_decoder

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
SOS_token = 0
EOS_token = 1
MAX_LENGTH = 10

app = flask.Flask(__name__)
CORS(app)

input_lang, output_lang, pairs = prepareData("eng", "fra", True)

# Turn a Unicode string to plain ASCII


def unicodeToAscii(s):
    return ''.join(
        c for c in unicodedata.normalize('NFD', s)
        if unicodedata.category(c) != 'Mn'
    )


# Lowercase, trim, and remove non-letter characters

def normalizeString(s):
    s = unicodeToAscii(s.lower().strip())
    s = re.sub(r"([.!?])", r" \1", s)
    s = re.sub(r"[^a-zA-Z.!?]+", r" ", s)
    return s


@app.route("/", methods=['GET'])
def hello_world():
    return "<p>Hello, World!</p>"


@app.route('/predict', methods=['GET', 'POST'])
# prediction
def predict(encoder=encoder, decoder=att_decoder, max_length=MAX_LENGTH):
    with torch.no_grad():
        # pairs[0] == = ['j ai ans .', 'i m .']
        # input test
        # pair = random.choice(pairs)
        # input_sentence = pair[0]

        data = request.get_json()
        print(data)
        input_sentence = unicodeToAscii(
            normalizeString(data['inputValues']['post_text']))

        # sentence ↔ tensor conversion
        def indexesFromSentence(lang=input_lang, sentence=input_sentence):
            sentence = [lang.word2index[word] for word in sentence.split(' ')]
            return sentence

        def tensorFromSentence(lang, sentence=input_sentence):
            indexes = indexesFromSentence(lang, sentence)
            indexes.append(EOS_token)
            return torch.tensor(indexes, dtype=torch.long, device=device).view(-1, 1)

        input_tensor = tensorFromSentence(input_lang, input_sentence)
        input_length = input_tensor.size()[0]
        encoder_hidden = encoder.initHidden()

        encoder_outputs = torch.zeros(
            max_length, encoder.hidden_size, device=device)

        for ei in range(input_length):
            encoder_output, encoder_hidden = encoder(input_tensor[ei],
                                                     encoder_hidden)
            encoder_outputs[ei] += encoder_output[0, 0]

        decoder_input = torch.tensor([[SOS_token]], device=device)  # SOS

        decoder_hidden = encoder_hidden

        decoded_words = []
        decoder_attentions = torch.zeros(max_length, max_length)

        for di in range(max_length):
            decoder_output, decoder_hidden, decoder_attention = decoder(
                decoder_input, decoder_hidden, encoder_outputs)
            decoder_attentions[di] = decoder_attention.data
            topv, topi = decoder_output.data.topk(1)
            if topi.item() == EOS_token:
                # decoded_words.append('<EOS>')
                break
            else:
                decoded_words.append(output_lang.index2word[topi.item()])

            decoder_input = topi.squeeze().detach()

        output_sentence = ' '.join(decoded_words)
        resp = make_response(
            jsonify({'translation': output_sentence, "input": input_sentence}))
        return resp
