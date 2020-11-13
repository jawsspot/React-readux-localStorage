import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import { postsReducer } from "./redux/postsReducer.js";
import NoteApp from "./App";
import "./index.css";

let commentsLoadState;

if (localStorage.getItem("comments") === null) {
  commentsLoadState = [];
} else {
  let comments = localStorage.getItem("comments");
  comments = JSON.parse(comments);
  let arr = [];
  commentsLoadState = comments.map((item) => {
    arr.push(item);
  });
  commentsLoadState = arr;
}

let initialState = commentsLoadState;

const store = createStore(postsReducer, initialState);

const app = (
  <Provider store={store}>
    <NoteApp />
  </Provider>
);

render(app, document.getElementById("root"));
