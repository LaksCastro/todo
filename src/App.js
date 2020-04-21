import React from "react";
import { Provider } from "react-redux";

import store from "./store/index";

import GlobalStyled from "./reset";

import Routes from "./routes";

const App = () => {
  return (
    <>
      <GlobalStyled />
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  );
};

export default App;
