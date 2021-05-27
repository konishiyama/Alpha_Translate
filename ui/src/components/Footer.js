import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import styled from "styled-components";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";

const Border = styled.div`
  border-top: 0.1px solid #dddddd;
  margin: 4rem 15px 0;
`;

const Container = styled.div`
  background-color: #f7f7f7;
  padding: 1rem 15px 1rem;
  a {
    color: #6e6e6e;
    text-decoration: none;
    &:hover {
      color: #6e6e6e;
      transition: all 0.4s ease-in;
    }
  }
`;

const Paragraph = styled.div`
  width: 80%;
  padding: 1rem 0 1rem;
  margin: 0 auto;
  display: flex;
`;

const Line = styled.p`
  vertical-align: middle;
  margin: 0 auto;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  color: #6e6e6e;
  a {
    color: #6e6e6e;
    text-decoration: none;
    &:hover {
      color: #6e6e6e;
      transition: all 0.4s ease-in;
    }
  }
`;

const Links = styled.div`
  display: flex;
  margin: 0 auto;
  text-align: center;
  text-decoration: none;
  color: #6e6e6e;
  width: 200px;
  a {
    color: #6e6e6e;
    text-decoration: none;
    &:hover {
      color: #6e6e6e;
      transition: all 0.4s ease-in;
    }
  }
`;

const A = styled.a`
  width: 200px;
`;

const Footer = () => {
  const router = useRouter();

  return (
    <>
      <Border></Border>
      <Container>
        <Paragraph>
          <Line>
            <Link href="/">
              <a>Top</a>
            </Link>
          </Line>
          <Line>
            <Link href="/#About">
              <a>About</a>
            </Link>
          </Line>
        </Paragraph>
        <Paragraph>
          <Links>
            <A
              href="https://github.com/konishiyama/Alpha_Translate"
              target="_blank"
            >
              <GitHubIcon></GitHubIcon>
            </A>
            <A href="https://www.facebook.com/ko.nishiyama" target="_blank">
              <FacebookIcon></FacebookIcon>
            </A>
          </Links>
        </Paragraph>
      </Container>
    </>
  );
};

export default Footer;
