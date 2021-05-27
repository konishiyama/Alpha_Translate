import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import ReactCountryFlag from "react-country-flag";
import axios from "axios";
import { ErrorMessage } from "../components/common";

const Translate = () => {
  const [inputValues, setInputValues] = useState({ post_text: "" });
  const [translatedText, setTranslatedText] = useState({ translated_text: "" });
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(`https://alpha-translate.herokuapp.com/predict`, { inputValues })
      .then((res) => {
        setTranslatedText({
          translated_text: res.data["translation"],
        });
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }

  function handleInputChange(e) {
    setErrorMessage("");
    setInputValues({
      post_text: e.target.value,
    });
  }

  return (
    <>
      <Container>
        <Form name="translate" onSubmit={handleSubmit}>
          <SubContainer1>
            <Title>
              Translate from
              <ReactCountryFlag
                className="emojiFlag"
                countryCode="FR"
                style={{
                  fontSize: "1.5em",
                  lineHeight: "1.5em",
                  marginLeft: "0.2em",
                }}
                aria-label="France"
              />
            </Title>
          </SubContainer1>
          <TEXTAREACONTAINER>
            <TEXTAREA
              required
              placeholder="Input text and press button"
              name="translate"
              onChange={handleInputChange}
            />
          </TEXTAREACONTAINER>
          <Button type="submit" block>
            Go!
          </Button>
        </Form>
        {!!errorMessage && <ErrorMessage>Invalid input</ErrorMessage>}
      </Container>
      <Container>
        <SubContainer1>
          <Title>
            Translated into
            <ReactCountryFlag
              className="emojiFlag"
              countryCode="US"
              style={{
                fontSize: "1.5em",
                lineHeight: "1.5em",
                marginLeft: "0.2em",
              }}
              aria-label="United States"
            />
          </Title>
        </SubContainer1>
        <SubContainer2>
          <TranslatedText id="About">
            {translatedText.translated_text}
          </TranslatedText>
        </SubContainer2>
      </Container>
    </>
  );
};

export default Translate;

const Container = styled.div`
  margin-bottom: 18px;
`;

const SubContainer1 = styled.div`
  display: flex;
  margin-bottom: 1rem;
  alignitems: center;
`;

const TEXTAREACONTAINER = styled.div`
  display: block;
  width: 100%;
  height: 172px;
  min-height: 20vh !important;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  padding: 8px;
  font-size: 14px;
  margin-bottom: 18px;
  border-radius: 4px;
  background: #fff;
  border: none;
  box-shadow: 0px 8px 32px rgb(0 0 0 / 8%) !important;
`;

const TEXTAREA = styled.textarea`
  display: block;
  width: 100%;
  height: 8rem;
  padding: 8px;
  font-size: 14px;
  margin-bottom: 18px;
  border-radius: 4px;
  border: none;
  box-shadow: none;
  border: none;
  overflow: auto;
  outline: none;
  resize: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
`;

const Form = styled.form`
  max-width: 100%;
  margin: 0 auto;
  text-align: left;
`;

const SubContainer2 = styled.div`
  display: block;
  width: 100%;
  height: 10vh;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  padding: 16px;
  font-size: 14px;
  margin-bottom: 18px;
  border-radius: 4px;
  background: #fff;
  border: none;
  box-shadow: 0px 8px 32px rgb(0 0 0 / 8%) !important;
`;

const TranslatedText = styled.p`
  margin: 0;
`;

const Title = styled.p`
  margin: 0;
  padding: 3px;
  font-weight: bold;
  color: #0f2b46;
`;

const Button = styled.button`
  padding: 2px 15px;
  background: #0f2b46;
  height: 30px;
  color: white;
  font-size: 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
  box-shadow: none;
  &:hover {
    opacity: 80%;
    cursor: pointer;
  }
`;
