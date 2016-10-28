const types = {
  // for page "/blog"
  "FETCH_POSTS": "FETCH_POSTS",
  "FETCH_POSTS_SUCCESS": "FETCH_POSTS_SUCCESS",
  "FETCH_POSTS_FAILURE": "FETCH_POSTS_FAILURE",


  "ADD_POST": "ADD_POST",
};

export const fetchPosts = () => {
  type: types.FETCH_POSTS
};


/*  post format:
[id, subject, content, created, last_modified]
*/
export const addPost = post => ({
  type: types.ADD_POST,
  post: post
});
