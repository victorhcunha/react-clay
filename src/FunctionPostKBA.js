import React, { useState } from "react";
import ClayForm, { ClayInput } from "@clayui/form";
import ClayButton from "@clayui/button";
import { postSiteKBA } from "./RequestFunctionsKBA";

export default function FunctionPostKBA() {
  const [title, setTitle] = useState("");
  const [articleBody, setArticleBody] = useState("");

function onClickPost() {
    postSiteKBA(title, articleBody).then(() => {
    setTitle("");
    setArticleBody("");
    });
}

return (
<>
    <ClayForm>
    <h1>POST Site Knowledge Base Article</h1>

    <ClayForm.Group className="form-group-sm">
        <label htmlFor="basicInputText">Title</label>
        <ClayInput
        id="title"
        placeholder="Insert the title here"
        type="text"
        value={title}
        onChange={(data) => setTitle(data.target.value)}
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
