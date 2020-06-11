import React from "react";
import styled from "styled-components";

export const FeatureStyled = styled.span`
  padding: 0.6em 0.8em;
  background: ${props =>
    props.type === "new" ? "var(--dark-cyan)" : "var(--very-dark-gray)"};
  color: white;
  border-radius: 1.2em;
  font-size: 0.7em;
  font-weight: 700;
`;
function Feature({ text, type }) {
  return <FeatureStyled type={type}>{text}</FeatureStyled>;
}

export default Feature;
