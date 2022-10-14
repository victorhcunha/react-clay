import React, { useState, useEffect } from "react";
import ClayTable from "@clayui/table";
import { getSiteBlogpost } from "./RequestFunctionsBlogpost";

export default function FunctionGetAllBlogpost(){
    const [blogposts, setBlogposts] = useState([]);

    useEffect(() => {getSiteBlogpost().then((response) => setBlogposts(response.items));}, [blogposts]);

return (
<>
    <h1>GET Blogposts</h1>
    <ClayTable>
    <ClayTable.Head>
        <ClayTable.Row>
        <ClayTable.Cell headingCell>{"Id"}</ClayTable.Cell>
        <ClayTable.Cell headingCell>{"Headline"}</ClayTable.Cell>
        <ClayTable.Cell headingCell>{"Article Body"}</ClayTable.Cell>
        </ClayTable.Row>
    </ClayTable.Head>

    <ClayTable.Body>
        {blogposts
        ? blogposts.map((post) => (
            <ClayTable.Row>
                <ClayTable.Cell>{post.id}</ClayTable.Cell>
                <ClayTable.Cell>{post.headline}</ClayTable.Cell>
                <ClayTable.Cell>{post.articleBody}</ClayTable.Cell>
            </ClayTable.Row>
            ))
        : ""}
    </ClayTable.Body>
    </ClayTable>
</>
);
}