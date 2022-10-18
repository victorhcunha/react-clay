const siteId = themeDisplay.getSiteGroupId();

//get
function getSiteDocument() {
  return Liferay.Util.fetch(
    `http://localhost:8080/o/headless-delivery/v1.0/sites/${siteId}/documents`,
    {
      method: "GET",
    }
  ).then((response) => response.json());
}

//post
function postSiteDocument() {
  const file = document.getElementById("basicInputFile").files[0];
  const data = new FormData();
  data.append("file", file);

  return Liferay.Util.fetch(
    `http://localhost:8080/o/headless-delivery/v1.0/sites/${siteId}/documents`,
    {
      method: "POST",
      body: data,
    }
  ).then((response) => response.json());
}

//put
function putDocument(id) {
  const file = document.getElementById("basicInputDoc");
  const data = new FormData();
  data.append("file", file.files[0]);

  console.log(file);
  console.log(data);

  return Liferay.Util.fetch(
    `http://localhost:8080/o/headless-delivery/v1.0/documents/${id}`,

    {
      method: "PUT",
      body: data,
    }
  ).then((response) => response.json());
}

//delete
function deleteDocument(id) {
  return Liferay.Util.fetch(
    `http://localhost:8080/o/headless-delivery/v1.0/documents/${id}`,
    {
      method: "DELETE",
    } 
  ).then((response) => response.json());
}

export {
  getSiteDocument,
  postSiteDocument,
  putDocument,
  deleteDocument,
};

