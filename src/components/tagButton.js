import React from "react";
import styled from "styled-components";
import imgClose from "../images/close.svg";

export const TagButtonStyled = styled.span`
  display: inline-flex;
  margin: 1em 1em 0 0;

  & span {
    font-size: 0.9em;
    color: var(--dark-cyan);
    font-weight: 700;
    padding: 0.5em 0.5em;
    background: var(--background);
    border-radius: 5px;
  }

  .btn-tag {
    background: var(--dark-cyan);
    color: white;
    border: none;
    background-image: url(${imgClose});
    width: 30px;

    background-repeat: none;
    background-position: center;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
  }
`;

function TagButton({ children, handleClose }) {
  return (
    <TagButtonStyled>
      <span>{children}</span>
      <button onClick={handleClose} className="btn-tag"></button>
    </TagButtonStyled>
  );
}

export default TagButton;
