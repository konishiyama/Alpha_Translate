import React, { useContext, useState } from "react";
import styled from "styled-components";
import NavbarLinks from "./NavbarLinks";

const Container = styled.div`
  // position: fixed;
  z-index: 1;
  height: 60px;
  // top: 0;
  // left: 0;
  background-color: #fff;
  margin: 0, auto;

  // @media (max-width: 400px) {
  //   display: flex;
  // }

  // @media (min-width: 769px) {
  //   display: none;
  // }
`;
const Toggle = styled.div`
  display: flex;
  position: fixed;
  z-index: 12;
  // top: 0;
  // left: 0;
  width: 415px;
  height: 60px;
  padding: 20px;
  cursor: pointer;
  background-color: #fff;
`;

const Navbox = styled.nav`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  z-index: ${(props) => (props.open ? "-1" : "2")};
  flex-direction: column;
  position: fixed;
  width: 415px;
  justify-content: flex-start;
  padding-top: 64px;
  background-color: #fff;
  transition: all 0.4s;
  opacity: ${(props) => (props.open ? "0" : "100%")};
`;

const Hamburger = styled.div`
  background-color: #111;
  width: 23px;
  height: 1px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${(props) => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 23px;
    height: 1px;
    background-color: #111;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${(props) =>
      props.open ? "rotate(-90deg) translate(-9px, 0px)" : "rotate(0deg)"};
    top: -8px;
  }

  ::after {
    opacity: ${(props) => (props.open ? "0" : "1")};
    transform: ${(props) => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 8px;
  }
`;

const LogoContainer = styled.div`
  z-index: 0;  
  border: 1px solid red
  width: 415px;
  height: 60px;
  padding: 20px;
`;

const Logo = styled.img`
  z-index: 10;
  top: 21px;
  right: 20px;
  height: 24px;
  object-fit: cover;
  cursor: pointer;
  margin: 0;
`;

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      {/* <Container
        style={{
          backgroudColor: `#fff`,
        }}
      > */}
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox>
          <NavbarLinks />
        </Navbox>
      ) : (
        <Navbox open>
          <NavbarLinks />
        </Navbox>
      )}
      {/* <LogoContainer>
          <a href="/">
            <Logo src="/images/logo1.jpeg"></Logo>
          </a>
        </LogoContainer> */}
      {/* </Container> */}
    </>
  );
};

export default Header;
