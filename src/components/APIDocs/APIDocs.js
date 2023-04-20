import { CardGroup, Grid, GridContainer } from "@trussworks/react-uswds";
import React, { useRef, useEffect } from "react";
import { constants } from "../../helpers/constants";
import { APIDocCard } from "../APIDocCard/APIDocCard";

export const APIDocs = () => {
  const apiDocsRef = useRef(null);
  useEffect(() => {
    apiDocsRef.current.focus();
  });

  return (
    <article>
      <GridContainer>
        <Grid row gap>
          <Grid desktop={{ col: 12 }} className="text-left">
            <h1 tabIndex={-1} ref={apiDocsRef} style={{ outline: "none" }}>
              API Documentation
            </h1>
            <p>
              Explore the following CAM API Swagger docs for endpoints that
              serve emissions, account, and compliance information.
            </p>
          </Grid>
        </Grid>
        <Grid row>
          <h1>Production API Documentation</h1>
          <CardGroup>
            {constants.swaggerPages
              .filter((page) => page.env === "prod")
              .map((page, index) => {
                return <APIDocCard page={page} index={index}></APIDocCard>;
              })}
          </CardGroup>
        </Grid>

        <Grid row>
          <h1>Beta API Documentation</h1>
          <CardGroup>
            {constants.swaggerPages
              .filter((page) => page.env === "beta")
              .map((page, index) => {
                return <APIDocCard page={page} index={index}></APIDocCard>;
              })}
          </CardGroup>
        </Grid>
      </GridContainer>
    </article>
  );
};
