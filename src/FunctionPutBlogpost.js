import { putBlogPost } from "./RequestFunctionsBlogpost";
import ClayForm, { ClayInput } from "@clayui/form";
import ClayButton from "@clayui/button";
import React, { useState } from "react";

export default function FunctionPutBlogpost() {
    const [id, setId] = useState("");
    const [headline, setHeadline] = useState("");
    const [articleBody, setArticleBody] = useState("");

    function onClickUpdate() {
        putBlogPost(id, headline, articleBody).then(() => {
            setId("");
            setHeadline("");
            setArticleBody("");
        });
    }

    return (
        <>
        <ClayForm>
            <h1>Update Blogpost</h1>

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

            <ClayButton onClick={() => onClickUpdate()} displayType="primary">
            UPDATE
            </ClayButton>

        </ClayForm>
        </>
);
}

