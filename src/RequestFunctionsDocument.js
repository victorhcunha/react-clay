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
  const file = document.getElementById("basicInputFileDoc").files[0];
  const data = new FormData();
  data.append("file", file);

  console.log(file);
  console.log(data);

  return Liferay.Util.fetch(
    `http://localhost:8080/o/headless-delivery/v1.0/sites/${id}/documents`,

    {
      method: "PATCH",
      body: data,
    }
  ).then((response) => response.json());
}

const docUPDATE = (id) => {
  const doc = document.querySelector('input[type="file"]');
  const data = new FormData();
  data.append("file", doc.files[0]);

  return Liferay.Util.fetch(
    `http://localhost:8080/o/headless-delivery/v1.0/sites/${id}/documents`,
    { 
      body: data,
      method: "PATCH",
    }
  );
};



//delete
function deleteDocument(id) {
  return Liferay.Util.fetch(
    `http://localhost:8080/o/headless-delivery/v1.0/documents/${id}`,
    {
      method: "DELETE",
    }
  ).then((response) => response.json());
}

export { getSiteDocument, postSiteDocument, putDocument, deleteDocument };
