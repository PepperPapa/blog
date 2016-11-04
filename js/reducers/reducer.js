import { combineReducers } from "redux";

const rootState = {
  postsList: {
    posts: [
      {
        id: 0,
        subject: "",
        content: "",
        created: "",
        last_modified: ""
      },
    ],
    error: null,
    loading: false
  },

  activePost: {
    post: {
      id: 0,
      subject: "",
      content: "",
      created: "",
      last_modified: ""
    },
    error: null,
    loading: false
  },

  newPost: {
    post: null,
    error: null,
    loading: false
  },

  newUser: {
    user: null,
    error: null,
    registering: false
  }
};

function postsListReducer(state = rootState.postsList, action) {
  switch (action.type) {
    case "FETCH_POSTS":
      return {posts: null, loading: true, error: null};
    case "FETCH_POSTS_SUCCESS":
      return {posts: action.payload, loading: false, error: null};
    case "FETCH_POSTS_FAILURE":
      return {posts: null, loading: false, error: {message: action.payload}}
    default:
      return state;
  }
}

function activePostReducer(state = rootState.activePost, action) {
  switch (action.type) {
    case "FETCH_POST":
      return {post: null, loading: true, error: null};
    case "FETCH_POST_SUCCESS":
      return {post: action.payload, loading: false, error: null};
    case "FETCH_POST_FAILURE":
      return {post: null, loading: false, error: {message: action.payload}}
    default:
      return state;
  }
}

function newPostReducer(state = rootState.newPost, action) {
  switch (action.type) {
    case "CREATE_POST":
      return {post: null, loading: true, error: null};
    case "CREATE_POST_SUCCESS":
      return {post: action.payload, loading: false, error: null};
    case "CREATE_POST_FAILURE":
      return {post: null, loading: false, error: {message: action.payload}}
    default:
      return state;
  }
}

function newUserReducer(state = rootState.newUser, action) {
  switch (action.type) {
    case "CREATE_USER":
      return {user: null, registering: true, error: null};
    case "CREATE_USER_SUCCESS":
      return {user: action.payload, registering: false, error: null};
    case "CREATE_USER_FAILURE":
      return {user: null, registering: false, error: {message: action.payload}}
    default:
      return state;
  }
}

/*
 TODO: must using export, if not the browser will report error below
 bundle.js:10988 Uncaught Error: Expected the reducer to be a function.(…)

 all reducers's states make up the full state
 */
export const reducer = combineReducers({
  postsList: postsListReducer,
  activePost: activePostReducer,
  newPost: newPostReducer,
  newUser: newUserReducer,
});

export default reducer;
