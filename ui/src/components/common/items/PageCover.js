import styled from "styled-components";

export const PageCover = styled.div`
  max-height: 100%;
  background-color: white;
  position: relative;
  margin-bottom: 1rem;

  p {
    position: absolute;
    top: 50%;
    left: 50%;
    font-family: Avenir Next Condensed;
    font-weight: 400;
    letter-spacing: 0.05em;
    font-size: 35px;
    color: #444444;
    margin: 0;
    -ms-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  img {
    opacity: 50%;
    width: 100%;
    margin: 0;
    height: 8rem;
    object-fit: cover;

    @media (min-width: 768px) {
      height: 10rem;
    }

    @media (min-width: 1024px) {
      height: 12rem;
    }
  }
`;
