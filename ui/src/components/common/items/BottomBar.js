import styled from "styled-components";

export const BottomBar = styled.div`
  bottom: 25px;
  right: 10px;
  display: flex;
  align-items: center;
  position: sticky;
  height: 6.5vh;

  @media (min-width: 768px) {
    position: sticky;
    height: 6.5vh;
  }
`;
