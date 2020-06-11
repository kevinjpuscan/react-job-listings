import React, { Component } from "react";
import styled from "styled-components";
import TagButton from "./tagButton";

export const SearchStyled = styled.div`
  background: white;
  min-height: 70px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.05);
  margin-top: -35px;
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  padding: 0 1em;
  justify-content: space-between;
  align-items: center;

  .input-content {
    margin: 0px;
    margin-bottom: 1em;
  }

  .btn-clear {
    border: none;
    background: none;
    font-size: 0.9em;
    font-weight: 700;
    color: var(--gray);
    cursor: pointer;
    :hover {
      color: var(--dark-cyan);
    }
  }
`;
class Search extends Component {
  render() {
    return (
      <SearchStyled>
        <p className="input-content">
          <TagButton
            handleClose={() => {
              console.log("close");
            }}
          >
            Javascript
          </TagButton>
          <TagButton
            handleClose={() => {
              console.log("close");
            }}
          >
            CSS
          </TagButton>
          <TagButton
            handleClose={() => {
              console.log("close");
            }}
          >
            CSS
          </TagButton>
          <TagButton
            handleClose={() => {
              console.log("close");
            }}
          >
            CSS
          </TagButton>
          <TagButton
            handleClose={() => {
              console.log("close");
            }}
          >
            CSS
          </TagButton>
        </p>
        <button className="btn-clear">clear</button>
      </SearchStyled>
    );
  }
}

export default Search;
