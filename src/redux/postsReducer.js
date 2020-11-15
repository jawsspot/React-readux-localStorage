const postsReducer = (state = [], action) => {
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
          id: action.id,
          index: action.index
        },
      ];

    case 'DELETE_COMMENTS':
        console.log(action.index);
        let newState = state;
       
         newState.splice(action.index, 1);

            let newLocalStor = JSON.stringify(newState);
            localStorage.setItem("comments", newLocalStor);

      return [
        ...newState];

    default:
      return state;
  }

   
};

export default postsReducer;
