import React, { useState } from "react";
import ClayForm, { ClayInput } from "@clayui/form";
import ClayButton from "@clayui/button";
import { deleteBlogPost } from "./RequestFunctionsBlogpost";

export default function FunctionDeleteBlogpost() {
const [id, setId] = useState("");

function onClickDelete() {
    deleteBlogPost(id).then(() => {
    setId("");
    });
}

return (
    <>
    <ClayForm>
        <h1>Delete Blogpost</h1>

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

        <ClayButton onClick={() => onClickDelete()} displayType="primary">
        DELETE
        </ClayButton>
    </ClayForm>
    </>
);
}
