import React, { useState } from "react";
import ClayForm, { ClayInput } from "@clayui/form";
import ClayButton from "@clayui/button";
import { postSiteDocument } from "./RequestFunctionsDocument";

export default function FunctionPostDocument() {

return (
  <>
    <ClayForm>
      <h1>POST SiteDocument</h1>
      <ClayInput id="basicInputFile" type="file" />

      <ClayButton onClick={() => postSiteDocument()} displayType="primary">
        POST
      </ClayButton>
    </ClayForm>
  </>
);
}