import { CREATE_COMMENTS, DELETE_COMMENTS } from "./types";

export const createComments = (post) => {
  return {
    type: CREATE_COMMENTS,
    payload: post,
  };
};

export const deleteComments = (id) => {
  console.log(id);
  return {
    type: DELETE_COMMENTS,
    payload: id
  };
};
