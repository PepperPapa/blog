import { combineReducers } from "redux";

const testState = {
  blogState: [
    {
      id: 0,
      subject: "React Native with Apollo Server and Client — Part 1",
      created: "2016.10.17",
      content: "Redux 是 JavaScript 状态容器，提供可预测化的状态管理。"+
"可以让你构建一致化的应用，运行于不同的环境（客户端、服务器、原生应用），并且易于测试。不仅于此，它还提供 超爽的开发体验，比如有一个时间旅行调试器可以编辑后实时预览。We will be using a combination of React Native, Apollo Client, Apollo Server, GraphQL, Express, and MongoDB to build a full stack mobile application."
    },
    {
      id: 1,
      subject: "SEO vs. React: Web Crawlers are Smarter Than You Think",
      created: "2016.10.17",
      content: "Many people still worry that if you build a websites using tools like React, Angular, or Ember, it will hurt your search engine ranking."
    }
  ]
};

function blogReducer(state = testState.blogState, action) {
  switch (action.type) {
    case "GET_POST_ID":
      console.log(action.id);
      return state[0];
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
