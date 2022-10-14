import React from "react";

import FunctionGetAllBlogpost from "./FunctionGetAllBlogpost";
import FunctionPostBlogpost from "./FunctionPostBlogpost";
import FunctionPutBlogpost from "./FunctionPutBlogpost";
import FunctionDeleteBlogpost from "./FunctionDeleteBlogpost";

import FunctionGetAllDocument from "./FunctionGetAllDocument";
import FunctionPostDocument from "./FunctionPostDocument";
import FunctionPutDocument from "./FunctionPutDocument";
import FunctionDeleteDocument from "./FunctionDeleteDocument";

import FunctionGetAllKBA from "./FunctionGetAllKBA.js";
import FunctionPostKBA from "./FunctionPostKBA.js";
import FunctionPutKBA from "./FunctionPutKBA.js";
import FunctionDeleteKBA from "./FunctionDeleteKBA.js";

function App() {
  return (
    <>
      <hr style={{ border: "3px solid" }} />

      <h1>
        <strong>BLOGPOST</strong>
      </h1>
      <hr />
      <FunctionGetAllBlogpost />
      <hr />
      <FunctionPostBlogpost />
      <hr />
      <FunctionPutBlogpost />
      <hr />
      <FunctionDeleteBlogpost />

      <hr style={{ border: "3px solid" }} />

      <h1>
        <strong>DOCUMENT</strong>
      </h1>
      <hr />
      <FunctionGetAllDocument />
      <hr />
      <FunctionPostDocument />
      <hr />
      <FunctionPutDocument />
      <hr />
      <FunctionDeleteDocument />

      <hr style={{ border: "3px solid" }} />
      
      <h1>
        <strong>KNOWLEDGE BASE ARTICLE</strong>
      </h1>
      <hr />
      <FunctionGetAllKBA />
      <hr />
      <FunctionPostKBA />
      <hr />
      <FunctionPutKBA />
      <hr />
      <FunctionDeleteKBA />
      <hr style={{ border: "3px solid" }} />
    </>
  );
}

export default App;