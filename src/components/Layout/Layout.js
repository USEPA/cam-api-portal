import React from "react";
import { Outlet } from "react-router-dom";
import { SubHeader } from "../SubHeader/SubHeader";
import { Alert } from "@trussworks/react-uswds";

export const Layout = () => {
  return (
    <div>
      <SubHeader />
      <Alert
        type="info"
        align="left"
        style={{ marginTop: 0 }}
        // headingLevel prop is from a newer version of @trussworks/react-uswds
        //headingLevel="h4"
        slim
      >
        The Clean Air Markets Program Data (CAMPD) 1.1 has been released! Click{" "}
        <a
          href="https://campd.epa.gov/"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>{" "}
        to check it out!
      </Alert>
      <main style={{ maxWidth: "64rem", margin: "0 auto" }}>
        <Outlet />
      </main>
    </div>
  );
};
