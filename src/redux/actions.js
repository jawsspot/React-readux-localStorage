

export const createComments = (post) => {
  return {
    type: 'CREATE_COMMENTS',
    name: post.name,
    comments: post.comments,
    date: new Date().toLocaleTimeString(),
    id: post.id
  };
};

export const deleteComments = (index) => {
  return {
    type: 'DELETE_COMMENTS',
    index: index
  };
};
