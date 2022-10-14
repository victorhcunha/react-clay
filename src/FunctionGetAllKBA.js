import React, { useState, useEffect } from "react";
import ClayTable from "@clayui/table";
import { getSiteKBA } from "./RequestFunctionsKBA";

export default function FunctionGetAllKBAs() {
    const [kbas, setKBAs] = useState([]);

    useEffect(() => {getSiteKBA().then((response) => setKBAs(response.items));}, [kbas]);

    return (
        <>
        <h1>GET Knowledge Base Article</h1>
        <ClayTable>

            <ClayTable.Head>
            <ClayTable.Row>
                <ClayTable.Cell headingCell>{"Id"}</ClayTable.Cell>
                <ClayTable.Cell headingCell>{"Title"}</ClayTable.Cell>
            </ClayTable.Row>
            </ClayTable.Head>

            <ClayTable.Body>
                {kbas ? kbas.map((post) => (
                    <ClayTable.Row>
                    <ClayTable.Cell>{post.id}</ClayTable.Cell>
                    <ClayTable.Cell>{post.title}</ClayTable.Cell>
                    </ClayTable.Row>
                ))
                : ""}
            </ClayTable.Body>
        </ClayTable>
        </>
);
}