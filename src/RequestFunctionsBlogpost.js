const siteId = themeDisplay.getSiteGroupId();

//getAll
function getSiteBlogpost() {
  return Liferay.Util.fetch(
    `http://localhost:8080/o/headless-delivery/v1.0/sites/${siteId}/blog-postings`,
    {
      method: "GET",
    }
  ).then((response) => response.json());
}

//post
function postSiteBlogPost(headline, articleBody) {
  return Liferay.Util.fetch(
    `http://localhost:8080/o/headless-delivery/v1.0/sites/${siteId}/blog-postings`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        headline,
        articleBody,
      }),
    }
  ).then((response) => response.json());
}

//put
function putBlogPost(id, headline, articleBody) {
  return Liferay.Util.fetch(
    `http://localhost:8080/o/headless-delivery/v1.0/blog-postings/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        headline,
        articleBody,
      }),
    }
  ).then((response) => response.json());
}

//delete
function deleteBlogPost(id) {
  return Liferay.Util.fetch(
    `http://localhost:8080/o/headless-delivery/v1.0/blog-postings/${id}`,
    {
      method: "DELETE",
    }
  ).then((response) => response.json());
}

export { getSiteBlogpost, postSiteBlogPost, putBlogPost, deleteBlogPost };