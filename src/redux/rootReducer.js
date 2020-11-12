import { combineReducers } from "redux";
import { postsReducer } from "./postsReducer.js";

export const rootReducer = combineReducers({
  posts: postsReducer,
  
});
