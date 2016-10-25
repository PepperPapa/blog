const types = {
  "ADD_POST": "ADD_POST",
};

/*  post format:
{
  id: {
    subject: "xx",
    created: "zz",
    content: "xxx"
  }
}
*/
export const addPost = post => ({
  type: types.ADD_POST,
  post: post
});
