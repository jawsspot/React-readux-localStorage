import { CREATE_COMMENTS, DELETE_COMMENTS } from "./types";

let storage;

if (localStorage.getItem("comments") === null) {
  storage = [];
} else {
  let comments = localStorage.getItem("comments");
  comments = JSON.parse(comments);
  let arr = [];
  storage = comments.map((item) => arr.push(item));
  storage = arr;
}

const initialState = {
  comentsPosts: storage,
};



export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_COMMENTS:

    let toLocalStor = JSON.stringify(state.comentsPosts);
      localStorage.setItem("comments", toLocalStor);

      return {
        ...state,
        comentsPosts: state.comentsPosts.concat(action.payload),
        
      };

    case DELETE_COMMENTS:

      let e = JSON.stringify(state.comentsPosts);
      localStorage.setItem("comments", e);

      return {
        ...state,
        comentsPosts: state.comentsPosts.filter(
          (posts) => posts.id !== action.payload
        ),
        
      };

    default:
      return state;
  }

   
};
