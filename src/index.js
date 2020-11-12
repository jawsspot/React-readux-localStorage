import React from "react";
import { render } from "react-dom";
import { compose, createStore } from "redux";
import { Provider } from "react-redux";

import { postsReducer } from "./redux/postsReducer.js";
import NoteApp from "./App";
import "./index.css";

const store = createStore(
  postsReducer,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const app = (
  <Provider store={store}>
    <NoteApp />
  </Provider>
);

render(app, document.getElementById("root"));
