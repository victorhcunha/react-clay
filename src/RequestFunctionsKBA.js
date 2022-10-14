const siteId = themeDisplay.getSiteGroupId();

//get
function getSiteKBA() {
  return Liferay.Util.fetch(
    `http://localhost:8080/o/headless-delivery/v1.0/sites/${siteId}/knowledge-base-articles`,
    {
      method: "GET",
    }
  ).then((response) => response.json());
}

//post
function postSiteKBA(title, articleBody) {
  return Liferay.Util.fetch(
    `http://localhost:8080/o/headless-delivery/v1.0/sites/${siteId}/knowledge-base-articles`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        articleBody,
      }),
    }
  ).then((response) => response.json());
}

//put
function putKBA(id, title, articleBody) {
  return Liferay.Util.fetch(
    `http://localhost:8080/o/headless-delivery/v1.0/knowledge-base-articles/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        articleBody,
      }),
    }
  ).then((response) => response.json());
}

//delete
function deleteKBA(id) {
  return Liferay.Util.fetch(
    `http://localhost:8080/o/headless-delivery/v1.0/knowledge-base-articles/${id}`,
    {
      method: "DELETE",
    }
  ).then((response) => response.json());
}

export { getSiteKBA, postSiteKBA, putKBA, deleteKBA };