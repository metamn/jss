import React from "react";
import styled from "styled-jss";

// Object notation
// Theming: `theme` is globally accessible since the `<ThemeProvider>` HOC in `App`
const Container = styled("section")(({ theme }) => ({
  ...theme.colors.default,
  ...theme.textStyles.default,
  padding: "var(--lem)"
}));

// Tagged template literals
// - they can't be mixed with object notations ... one notation at a time
const H1 = styled("H1")(`
	font-size: large;
	`);

// Props
const Text = styled("div")(props => ({
  fontWeight: props.type === "p" ? "bold" : "normal",
  marginBottom: props.type === "p" ? "var(--lem)" : 0
}));

// Composition
const ListItem = styled(Text)({
  letterSpacing: "3px",
  marginBottom: "calc(var(--lem) / 2) !important",

  // Styling children
  "& span": {
    fontStyle: "italic"
  },

  // Media queries
  "& .uppercase": {
    "@media (min-width: 1024px)": {
      textTransform: "uppercase"
    }
  }
});

const Content = () => {
  return (
    <Container>
      <H1>JSS</H1>
      <Text type="p">Features:</Text>
      <ListItem>Theming</ListItem>
      <ListItem>Object notation</ListItem>
      <ListItem>Tagged template literals</ListItem>
      <ListItem>Props</ListItem>
      <ListItem>Composition</ListItem>
      <ListItem>
        <span>Styling child elements</span>
      </ListItem>
      <ListItem>
        <span class="uppercase">Media queries</span>
      </ListItem>
    </Container>
  );
};

export default Content;
