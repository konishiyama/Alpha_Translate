import styled from "styled-components";

export const TopLink = styled.a`
  width: 35%;
  font-size: 14px;
  color: #1e90ff;
  display: block;
  text-align: center;
  border: solid 1px #1e90ff;
  padding: 0.5em;
  line-height: 1.5;
  text-decoration: none;
  margin-top: 3em;
  &:hover {
    color: #fff;
    background-color: #1e90ff;
    border: solid 1px #1e90ff;
    transition: all 0.2s ease-in;
  }

  @media (min-width: 768px) {
    width: 25%;
  }

  @media (min-width: 1024px) {
    width: 25%;
  }
`;
