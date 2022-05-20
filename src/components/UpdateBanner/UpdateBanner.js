import React from "react";
import { Alert } from "@trussworks/react-uswds";

export const UpdateBanner = () => {
  return (
    <Alert type="info" heading="Informative status" headingLevel="h4">
      This is the first iteration of the CAM API portal, click{" "}
      <a
        href="https://www.epa.gov/airmarkets/forms/cam-api-contact-us"
        target="_blank"
        rel="noreferrer"
      >
        here
      </a>{" "}
      to add feedback.
    </Alert>
  );
};
