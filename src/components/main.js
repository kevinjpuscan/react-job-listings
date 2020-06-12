import React from "react";
import styled from "styled-components";
import imgMobile from "../images/bg-header-mobile.svg";
import imgDesktop from "../images/bg-header-desktop.svg";
import Wrapper from "./wrapper";
import Card from "./card";
import Search from "./search";
import data from "../data.json";
import images from "../images/index.js";
import { connect } from "react-redux";

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
    margin-top: 5em;
  }

  @media (min-width: 1440px) {
    .header {
      background-image: url(${imgDesktop});
    }
  }
`;

class Main extends React.Component {
  isShow = job => {
    let tags = [job.role, job.level, ...job.languages, ...job.tools];

    let show = true;
    for (let i = 0; i < this.props.filters.length; i++) {
      if (tags.indexOf(this.props.filters[i]) < 0) {
        show = false;
      }
    }

    return show;
  };

  render() {
    return (
      <MainStyled>
        <div className="header"></div>
        <div className="result">
          <Wrapper>
            <Search />
            <div className="list-result">
              {data.map(
                (el, idx) =>
                  this.isShow(el) && (
                    <Card key={idx} el={el} image={images[el.logo]} />
                  )
              )}
            </div>
          </Wrapper>
        </div>
      </MainStyled>
    );
  }
}

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
