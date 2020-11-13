

export const createComments = (post) => {
  return {
    type: 'CREATE_COMMENTS',
    name: post.name,
    comments: post.comments,
    date: new Date().toLocaleTimeString(),
    id: Date.now(),
  };
};

export const deleteComments = (id) => {
  console.log(id);
  return {
    type: 'DELETE_COMMENTS',
    payload: id
  };
};
