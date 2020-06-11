import React, { Component } from "react";
import styled from "styled-components";
import TagButton from "./tagButton";
import { connect } from "react-redux";

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
  handleClear = () => {
    this.props.dispatch({ type: "CLEAR_FILTER" });
  };
  render() {
    return (
      this.props.filters.length > 0 && (
        <SearchStyled>
          <p className="input-content">
            {this.props.filters.map((filter, idx) => (
              <TagButton key={idx}>{filter}</TagButton>
            ))}
          </p>
          <button className="btn-clear" onClick={this.handleClear}>
            clear
          </button>
        </SearchStyled>
      )
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
)(Search);
