import React from "react";
import styled from "styled-components";
import ReactCountryFlag from "react-country-flag";

const Container = styled.div``;

const SubContainer1 = styled.div`
  display: flex;
  margin-bottom: 1rem;
  alignitems: center;
`;

const Title = styled.p`
  margin: 0;
  padding: 3px;
`;

const Translate = () => {
  return (
    <>
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
      </Container>
    </>
  );
};

export default Translate;
