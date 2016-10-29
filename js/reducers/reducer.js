import { combineReducers } from "redux";

const rootState = {
  postsList: {
    posts: [
      {
        id: 0,
        subject: "test0",
        content: "text0",
        created: "Oct 26, 2016",
        last_modified: "Oct 26, 2016"
      },
      {
        id: 1,
        subject: "test1",
        content: "text1",
        created: "Oct 26, 2016",
        last_modified: "Oct 26, 2016"
      },
    ],
    error: null,
    loading: false
  },

  activePost: {
    post: {
      id: 0,
      subject: "test0",
      content: "text0",
      created: "Oct 26, 2018",
      last_modified: "Oct 26, 2016"
    },
    error: null,
    loading: false
  }
};

function postsListReducer(state = rootState.postsList, action) {
  switch (action.type) {
    case "FETCH_POSTS":
      return {posts:[], loading: true, error: null};
    case "FETCH_POSTS_SUCCESS":
      return {posts: action.payload, loading: false, error: null};
    case "FETCH_POSTS_FAILURE":
      return {posts: [], loading: false, error: {message: action.payload}}
    default:
      return state;
  }
}

function activePostReducer(state = rootState.activePost, action) {
  switch (action.type) {
    case "FETCH_POST":
      return {post:{}, loading: true, error: null};
    case "FETCH_POST_SUCCESS":
      return {post: action.payload, loading: false, error: null};
    case "FETCH_POST_FAILURE":
      return {post: [], loading: false, error: {message: action.payload}}
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
  activePost: activePostReducer
});

export default reducer;
