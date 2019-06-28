import React from "react";
import styled from "styled-jss";

// Object notation
// `theme` is globally accessible since the `<ThemeProvider>` HOC in `App`
const Container = styled("section")(({ theme }) => ({
  ...theme.colors.default,
  ...theme.textStyles.default,
  padding: "var(--lem)"
}));

// Tagged template literals
const H1 = styled("H1")(`
	font-size: large;
	`);

const Content = () => {
  return (
    <Container>
      <H1>JSS</H1>
      <p>Features:</p>
      <ul>
        <li>Theming</li>
        <li>Object notation</li>
        <li>Tagged template literals</li>
      </ul>
    </Container>
  );
};

export default Content;
