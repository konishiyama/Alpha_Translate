import styled from "styled-components";

export const PageSubTitle = styled.div`
  margin: 3rem auto 1.5rem;
  text-align: center;

  span {
    font-family: Avenir Next Condensed;
    font-weight: 100;
    letter-spacing: 0.03em;
    font-size: 17px;
    color: #444444;
    margin: 0 auto;
  }
  span:after {
    content: "";
    display: block;
    height: 1.8px;
    width: 13vw;
    margin: 0.8rem auto 0;
    background-color: #1e90ff;
  }
`;
