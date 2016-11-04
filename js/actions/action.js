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

  // for page "/signup"
  "CREATE_USER": "CREATE_USER",
  "CREATE_USER_SUCCESS": "CREATE_USER_SUCCESS",
  "CREATE_USER_FAILURE": "CREATE_USER_FAILURE",

  // for page "/login"
  "USER_LOGIN": "USER_LOGIN",
  "USER_LOGIN_SUCCESS": "USER_LOGIN_SUCCESS",
  "USER_LOGIN_FAILURE": "USER_LOGIN_FAILURE",
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

// action creater for signup
export function createUser(props) {
  $.ajax({
    type: "post",
    url: "/signup.py",
    async: true,
    context: props,
    success: function(xhr) {
      store.dispatch(createUserSuccess(JSON.parse(xhr.responseText)));
    },
    error: function(xhr) {
      store.dispatch(createUserFailure(JSON.parse(xhr.responseText)));
    }
  });

  return {
    type: types.CREATE_USER
  };
}

export function createUserSuccess(newUser) {
  return {
    type: types.CREATE_USER_SUCCESS,
    payload: newUser
  };
}

export function createUserFailure(error) {
  return {
    type: types.CREATE_USER_FAILURE,
    payload: error
  };
}

// action creater for login
export function userLogin(props) {
  $.ajax({
    type: "post",
    url: "/login.py",
    async: true,
    context: props,
    success: function(xhr) {
      console.log(xhr.responseText);
      store.dispatch(userLoginSuccess(JSON.parse(xhr.responseText)));
    },
    error: function(xhr) {
      console.log(xhr.responseText);
      store.dispatch(userLoginFailure(JSON.parse(xhr.responseText)));
    }
  });

  return {
    type: types.USER_LOGIN
  };
}

export function userLoginSuccess(user) {
  return {
    type: types.USER_LOGIN_SUCCESS,
    payload: user
  };
}

export function userLoginFailure(error) {
  return {
    type: types.USER_LOGIN_FAILURE,
    payload: error
  };
}
