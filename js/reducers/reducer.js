import { combineReducers } from "redux";

const rootState = {
  blogState: [
    [4, "test subject", "test content", "Oct 26, 2016", "Oct 26, 2016"],
    [3, "test subject", "test content", "Oct 26, 2016", "Oct 26, 2016"]
  ]
};

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

/* TODO: must using export, if not the browser will report error below
 bundle.js:10988 Uncaught Error: Expected the reducer to be a function.(…) */
export const reducer = combineReducers({
  blogState: blogReducer
});

export default reducer;
