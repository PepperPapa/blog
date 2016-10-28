import $ from "../lib/XHR";
import store from "../store/store";

const types = {
  // for page "/blog"
  "FETCH_POSTS": "FETCH_POSTS",
  "FETCH_POSTS_SUCCESS": "FETCH_POSTS_SUCCESS",
  "FETCH_POSTS_FAILURE": "FETCH_POSTS_FAILURE",


  "ADD_POST": "ADD_POST",
};

export function fetchPosts() {
  $.ajax({
    type: "get",
    url: "/blog/posts.py",
    async: true,
    context: null,
    success: function(xhr) {
      store.dispatch(
        fetchPostsSuccess(JSON.parse(xhr.responseText))
      );
    },
    error: function(xhr) {
      store.dispatch(
        fetchPostsFailure(JSON.parse(xhr.responseText))
      );
    }
  });
  return {
    type: types.FETCH_POSTS
  };
};

export function fetchPostsSuccess(posts) {
  return {
    type: types.FETCH_POSTS_SUCCESS,
    payload: posts
  }
};

export function fetchPostsFailure(error) {
  return {
    type: types.FETCH_POSTS_FAILURE,
    payload: error
  }
}


/*  post format:
[id, subject, content, created, last_modified]
*/
export const addPost = post => ({
  type: types.ADD_POST,
  post: post
});
