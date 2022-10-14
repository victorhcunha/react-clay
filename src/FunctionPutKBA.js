import { putKBA } from "./RequestFunctionsKBA";
import ClayForm, { ClayInput } from "@clayui/form";
import ClayButton from "@clayui/button";
import React, { useState } from "react";

export default function FunctionPutBlogpost() {
const [id, setId] = useState("");
const [title, setTitle] = useState("");
const [articleBody, setArticleBody] = useState("");

function onClickUpdate() {
    putKBA(id, title, articleBody).then(() => {
    setId("");
    setTitle("");
    setArticleBody("");
    });
}

return (
<>
    <ClayForm>
    <h1>Update Knowledge Base Article</h1>

    <ClayForm.Group className="form-group-sm">
        <label htmlFor="basicInputText">Id</label>
        <ClayInput
        id="id"
        placeholder="Insert the id here"
        type="text"
        value={id}
        onChange={(data) => setId(data.target.value)}
        />
    </ClayForm.Group>

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

    <ClayButton onClick={() => onClickUpdate()} displayType="primary">
        UPDATE
    </ClayButton>
    </ClayForm>
</>
);
}
