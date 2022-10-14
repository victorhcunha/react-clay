import React, { useState } from "react";
import ClayForm, { ClayInput } from "@clayui/form";
import ClayButton from "@clayui/button";
import { deleteKBA } from "./RequestFunctionsKBA";

export default function FunctionDeleteKBA() {
const [id, setId] = useState("");

function onClickDelete() {
    deleteKBA(id).then(() => {
    setId("");
    });
}

return (
<>
    <ClayForm>
    <h1>Delete Knowledge Base Article</h1>

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
