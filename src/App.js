import React from "react";
import { ThemeProvider } from "react-jss";

import Theme from "./Theme";
import Content from "./Content";

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Content />
    </ThemeProvider>
  );
};
export default App;
