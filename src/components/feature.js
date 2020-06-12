import React from "react";
import styled from "styled-components";

export const FeatureStyled = styled.span`
  padding: 0.6em 0.8em;
  background: ${props =>
    props.typeFeature === "new" ? "var(--dark-cyan)" : "var(--very-dark-gray)"};
  color: white;
  border-radius: 1.2em;
  font-size: 0.7em;
  font-weight: 700;
`;
function Feature({ text, typeFeature }) {
  return <FeatureStyled typeFeature={typeFeature}>{text}</FeatureStyled>;
}

export default Feature;
