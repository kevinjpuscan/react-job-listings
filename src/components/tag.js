import React from "react";
import styled from "styled-components";

export const TagStyled = styled.span`
  font-size: 0.9em;
  color: var(--dark-cyan);
  font-weight: 700;
  padding: 0.5em 0.5em;
  background: var(--background);
  border-radius: 5px;
  cursor: pointer;
`;

function Tag({ children }) {
  return <TagStyled>{children}</TagStyled>;
}

export default Tag;
