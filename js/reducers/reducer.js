import { combineReducers } from "redux";

const rootState = {
  blogState: [
    [4, "test subject", "test content", "Oct 26, 2016", "Oct 26, 2016"],
    [3, "test subject", "test content", "Oct 26, 2016", "Oct 26, 2016"]
  ],
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
  }
};

function postsListReducer(state = rootState.postsList, action) {
  switch (action.type) {
    case "FETCH_POSTS":
      return state;
      break;
    default:
      return state;
  }
}

function blogReducer(state = rootState.blogState, action) {
  switch (action.type) {
    case "ADD_POST":
      var newState = [].concat([action.post], state);
      console.log(newState);
      return newState;
      break;
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
  blogState: blogReducer
});

export default reducer;
