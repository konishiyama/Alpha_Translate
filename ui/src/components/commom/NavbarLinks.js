import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import styled from "styled-components";

const NavItemHome = styled.a`
  color: #0f2b46;
  height: 70px;
  font-size: 1rem;
  font-weight: bold;
  padding: 20px 0;
  z-index: 6;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;
  text-decoration: underline;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: #0f2b46;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    cursor: pointer;
    text-decoration: none;
    color: #0f2b46;
    ::after {
      width: 100%;
    }
  }
`;
const NavItem = styled.a`
  color: #0f2b46;
  font-size: 1rem;
  height: 70px;
  padding: 20px 0;
  z-index: 6;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: #0f2b46;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    cursor: pointer;
    text-decoration: none;
    color: #0f2b46;
    ::after {
      width: 100%;
    }
  }
`;

const NavbarLinks = () => {
  const router = useRouter();

  return (
    <>
      <a href="/">
        <NavItemHome>TOP</NavItemHome>
      </a>
      <a href="/#About">
        <NavItem>ABOUT</NavItem>
      </a>
    </>
  );
};

export default NavbarLinks;
