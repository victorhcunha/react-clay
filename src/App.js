import React from "react";
import FunctionGetAllBlogpost from "./FunctionGetAllBlogpost";
import FunctionPostBlogpost from "./FunctionPostBlogpost";
import FunctionPutBlogpost from "./FunctionPutBlogpost";
import FunctionDeleteBlogpost from "./FunctionDeleteBlogpost";

function App() {
  return (
    <>
      <hr />
      <FunctionGetAllBlogpost />
      <hr />
      <FunctionPostBlogpost />
      <hr />
      <FunctionPutBlogpost />
      <hr />
      <FunctionDeleteBlogpost />
      <hr />
    </>
  );
}

export default App;