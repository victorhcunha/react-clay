import React, { useState } from "react";
import ClayForm, { ClayInput } from "@clayui/form";
import ClayButton from "@clayui/button";
import { postSiteBlogPost } from "./RequestFunctionsBlogpost";

export default function FunctionPostBlogpost() {
  const [headline, setHeadline] = useState("");
  const [articleBody, setArticleBody] = useState("");

  function onClickPost() {
    postSiteBlogPost(headline, articleBody).then(() => {
      setHeadline("");
      setArticleBody("");
    });
  }

  return (
    <>
      <ClayForm>
        <h1>POST Site Blogpost</h1>

        <ClayForm.Group className="form-group-sm">
          <label htmlFor="basicInputText">Headline</label>
          <ClayInput
            id="headline"
            placeholder="Insert the headline here"
            type="text"
            value={headline}
            onChange={(data) => setHeadline(data.target.value)}
          />
        </ClayForm.Group>

        <ClayForm.Group className="form-group-sm">
          <label htmlFor="basicInputText">Article Body</label>
          <ClayInput
            id="articleBody"
            placeholder="Insert the article body here"
            type="text"
            value={articleBody}
            onChange={(data) => setArticleBody(data.target.value)}
          />
        </ClayForm.Group>

        <ClayButton onClick={() => onClickPost()} displayType="primary">
          POST
        </ClayButton>
      </ClayForm>
    </>
  );
}