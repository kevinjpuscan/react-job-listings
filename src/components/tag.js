import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

export const TagStyled = styled.span`
  font-size: 0.9em;
  color: var(--dark-cyan);
  font-weight: 700;
  padding: 0.5em 0.5em;
  background: var(--background);
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: var(--dark-cyan);
    color: white;
    font-size: 0.9em;
  }
`;

class Tag extends React.Component {
  handleClick = () => {
    if (this.props.filters.indexOf(this.props.children) < 0) {
      this.props.dispatch({ type: "ADD_FILTER", payload: this.props.children });
    }
  };
  render() {
    return (
      <TagStyled onClick={this.handleClick}>{this.props.children}</TagStyled>
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
)(Tag);
