import React from "react";
import styled from "styled-components";
import imgMobile from "../images/bg-header-mobile.svg";
import imgDesktop from "../images/bg-header-desktop.svg";
import Wrapper from "./wrapper";
import Card from "./card";
import Search from "./search";

export const MainStyled = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 155px auto;

  .header {
    background: var(--dark-cyan);
    background-image: url(${imgMobile});
  }

  .result {
    background: var(--background);
    padding: 0px 0px 3.5em 0px;
  }

  .list-result {
    margin-top: 1em;
  }

  @media (min-width: 1440px) {
    .header {
      background-image: url(${imgDesktop});
    }
  }
`;

function Main() {
  return (
    <MainStyled>
      <div className="header"></div>
      <div className="result">
        <Wrapper>
          <Search />
          <div className="list-result">
            <Card />
            <Card />
          </div>
        </Wrapper>
      </div>
    </MainStyled>
  );
}

export default Main;
