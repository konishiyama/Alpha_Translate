import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const SubContainer1 = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 1rem;
  alignitems: center;
`;

const SubContainer2 = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  alignitems: center;
`;

const Title = styled.p`
  color: #0f2b46;
  margin: 0;
  padding: 3px;
  font-size: 25px;
  font-weight: bold;
  text-decoration: none;
`;

const Paragraph = styled.p`
  margin: 0 0 10px;
  padding: 3px;
  width: 100%;
  color: #6e6e6e;
`;

const About = () => {
  return (
    <>
      <Container>
        <SubContainer1>
          <Title>What is Alpha Translate?</Title>
        </SubContainer1>
        <SubContainer2>
          <Paragraph>
            Alpha Translator is an online translation service implemented under
            a simple neural machine translation algorithm based on GRU.
          </Paragraph>
          <Paragraph>
            Due to the limited availability of the datasets and the facilities
            for model training, Alpha Translator currently(as of May, 2021)
            works on a limited use cases, only from French to English
            translation, and on a set of pre-defined input texts(you would have
            an input error if you input texts not in the pre-defined sets.).
          </Paragraph>
          <Paragraph>
            Source code and the models are available at my
            <a
              href="https://github.com/konishiyama/Alpha_Translate"
              target="_blank"
              style={{
                textDecoration: `none`,
                marginLeft: `0.3em`,
              }}
            >
              Github.
            </a>
          </Paragraph>
        </SubContainer2>
      </Container>
    </>
  );
};

export default About;
