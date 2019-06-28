import React from "react";
import styled from "react-jss"; // it works with `styled-jss`

// Object notation
// Theming: `theme` is globally accessible since the `<ThemeProvider>` HOC in `App`
const Container = styled("section")(({ theme }) => ({
  ...theme.colors.default,
  ...theme.textStyles.default,
  padding: "var(--lem)"
}));

// Tagged template literals
// - they can't be mixed with object notations ... one notation at a time: either object or template
const H1 = styled("H1")(`
	font-size: large;
	`);

// Tagged template literals with plugin
// This should work ...
const XXL = styled("div")(({ theme }) => ({
  ...theme.textStyles.xxl
}));

// Props
const Text = styled("div")(props => ({
  fontWeight: props.type === "p" ? "bold" : "normal",
  marginBottom: props.type === "p" ? "var(--lem)" : 0
}));

// Styling other elements
const OtherElement = styled("div")();

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
  },

  // Styling other elements
  [`& ${OtherElement}`]: {
    backgroundColor: "black",
    color: "white",

    // Styling nested children
    "& span": {
      fontStyle: "italic"
    }
  }
});

// Styling components
const Comp = props => {
  const { children } = props;
  return <div>{children}</div>;
};

const CompStyled = styled(Comp)({
  border: "1px solid"
});

const Content = () => {
  return (
    <Container>
      <H1>JSS</H1>
      <Text type="p">Features:</Text>
      <ListItem>Global styles ??</ListItem>
      <ListItem>Theming</ListItem>
      <ListItem>Object notation</ListItem>
      <ListItem>Tagged template literals</ListItem>
      <ListItem>
        <XXL>Tagged template literals with plugin ??</XXL>
      </ListItem>
      <ListItem>Props</ListItem>
      <ListItem>Composition</ListItem>
      <ListItem>
        <span>Styling child elements</span>
      </ListItem>
      <ListItem>
        <span class="uppercase">Media queries</span>
      </ListItem>
      <ListItem>
        <OtherElement>Styling other elements</OtherElement>
      </ListItem>
      <ListItem>
        <OtherElement>
          <span>Styling nested children</span>
        </OtherElement>
      </ListItem>
      <ListItem>
        <CompStyled>Styling components ??</CompStyled>
      </ListItem>
    </Container>
  );
};

export default Content;
