import React, { useState, useEffect } from "react";
import ClayTable from "@clayui/table";
import { getSiteDocument } from "./RequestFunctionsDocument";

export default function FunctionGetAllBlogpost() {
const [documents, setDocuments] = useState([]);

useEffect(() => {
getSiteDocument().then((response) => setDocuments(response.items));
}, [documents]);

return (
<>
    <h1>GET Documents</h1>
    <ClayTable>
    <ClayTable.Head>
        <ClayTable.Row>
        <ClayTable.Cell headingCell>{"Id"}</ClayTable.Cell>
        </ClayTable.Row>
    </ClayTable.Head>

    <ClayTable.Body>
        {documents
        ? documents.map((post) => (
            <ClayTable.Row>
                <ClayTable.Cell>{post.id}</ClayTable.Cell>
            </ClayTable.Row>
            ))
        : ""}
    </ClayTable.Body>
    </ClayTable>
</>
);
}
