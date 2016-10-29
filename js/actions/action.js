import $ from "../lib/XHR";
import store from "../store/store";

const types = {
  // for page "/blog"
  "FETCH_POSTS": "FETCH_POSTS",
  "FETCH_POSTS_SUCCESS": "FETCH_POSTS_SUCCESS",
  "FETCH_POSTS_FAILURE": "FETCH_POSTS_FAILURE",

  // for page "/blog/:postId"
  "FETCH_POST": "FETCH_POST",
  "FETCH_POST_SUCCESS": "FETCH_POST_SUCCESS",
  "FETCH_POST_FAILURE": "FETCH_POST_FAILURE",
  "RESET_ACTIVE_POST": "RESET_ACTIVE_POST",

  // for page "/blog/newpost"
  "CREATE_POST": "CREATE_POST",
  "CREATE_POST_SUCCESS": "CREATE_POST_SUCCESS",
  "CREATE_POST_FAILURE": "CREATE_POST_FAILURE",
  "NEW_POST_RESET": "NEW_POST_RESET",

  "ADD_POST": "ADD_POST",
};

// action creater for postsList
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
  };
};

export function fetchPostsFailure(error) {
  return {
    type: types.FETCH_POSTS_FAILURE,
    payload: error
  };
}

// action creater for postDetail
export function fetchPost(postId) {
  $.ajax({
    type: "get",
    url: "/blog/" + postId + ".py",
    async: true,
    content: null,
    success: function(xhr) {
      store.dispatch(
        fetchPostSuccess(JSON.parse(xhr.responseText))
      );
    },
    error: function(xhr) {
      store.dispatch(
        fetchPostFailure(JSON.parse(xhr.responseText))
      );
    }
  });

  return {
    type: types.FETCH_POST
  };
}

export function fetchPostSuccess(activePost) {
  return {
    type: types.FETCH_POST_SUCCESS,
    payload: activePost
  };
}

export function fetchPostFailure(error) {
  return {
    type: types.FETCH_POST_SUCCESS,
    payload: error
  };
}

// action creater for newpost
export function createPost(props) {
  $.ajax({
    type: "post",
    url: "/blog/newpost.py",
    async: true,
    context: props,
    success: function(xhr) {
      store.dispatch(createPostSuccess(JSON.parse(xhr.responseText)));
    },
    error: function(xhr) {
      store.dispatch(createPostFailure(JSON.parse(xhr.responseText)));
    }
  });

  return {
    type: types.CREATE_POST
  }
}

export function createPostSuccess(newPost) {
  return {
    type: types.CREATE_POST_SUCCESS,
    payload: newPost
  };
}

export function createPostFailure(error) {
  return {
    type: types.CREATE_POST_FAILURE,
    payload: error
  };
}
