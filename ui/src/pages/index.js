import React, { useContext } from "react";
import styled from "styled-components";
import Contact from "../components/Contact";
import Translate from "../components/Translate";
import About from "../components/About";
import { SubTitle } from "../components/common";
import Fade from "react-reveal/Fade";

const IndexPage = ({ data }) => {
  return (
    <>
      <section>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 400,
            padding: `4.5rem 15px 0rem`,
          }}
        >
          <Translate></Translate>
          <br></br>
          <br></br>
          <br></br>
          <About></About>
        </div>
      </section>
    </>
  );
};

export default IndexPage;
