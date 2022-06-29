import React from "react";
import { Outlet } from "react-router-dom";
import { SubHeader } from "../SubHeader/SubHeader";
import { Alert } from "@trussworks/react-uswds";

export const Layout = () => {
  return (
    <div>
      <SubHeader />
      <main>
        <Alert
          type="info"
          align="left"
          // headingLevel prop is from a newer version of @trussworks/react-uswds
          //headingLevel="h4"
          slim
        >
          This is the first iteration of the CAM API portal, click{" "}
          <a
            href="https://www.epa.gov/airmarkets/forms/cam-api-contact-us"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>{" "}
          to provide feedback.
        </Alert>
        <Outlet />
      </main>
    </div>
  );
};
