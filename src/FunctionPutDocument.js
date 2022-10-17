import { putDocument } from "./RequestFunctionsDocument";
import ClayForm, { ClayInput } from "@clayui/form";
import ClayButton from "@clayui/button";
import React, { useState } from "react";

export default function FunctionPutDocument() {
const [id, setId] = useState("");

function onClickUpdate() {
    putDocument(id).then(() => {
      setId("");
    });
}

return (
<>
    <ClayForm>
    <h1>Update Document</h1>

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

    <ClayForm.Group>
        <ClayInput id="basicInputDoc" type="file" />
    </ClayForm.Group>

    <ClayButton onClick={() => onClickUpdate()} displayType="primary">
        UPDATE
    </ClayButton>
    </ClayForm>
</>
);
}
