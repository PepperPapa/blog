const types = {
  "ADD_POST": "ADD_POST",
};

/*  post format:
[id, subject, content, created, last_modified]
*/
export const addPost = post => ({
  type: types.ADD_POST,
  post: post
});
