






export const postsReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_COMMENTS':

     let commentsState = localStorage.getItem("comments");
     commentsState = JSON.parse(commentsState);

    const addCommentObj = {
      name: action.name,
      comments: action.comments,
      date: action.date,
      id: action.id,
    };

    commentsState.push(addCommentObj);
    let toLocalStor = JSON.stringify(commentsState);
    localStorage.setItem("comments", toLocalStor);


      return [
        ...state,
        {
          name: action.name,
          comments: action.comments,
          date: action.date,
          id: action.id
        },
      ];

    case 'DELETE_COMMENTS':
        
    let newState = state;
         newState.splice(action.id, 1);

            let newLocalStor = JSON.stringify(newState);
            localStorage.setItem("comments", newLocalStor);

      return [
        ...newState];

    default:
      return state;
  }

   
};
