import {
  CardGroup,
  Grid,
  GridContainer,
  Tag,
  Alert,
} from "@trussworks/react-uswds";
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
              serve emissions, account, and compliance information. The APIs
              currently in production support the Clean Air Markets Program Data
              ( <Tag>CAMPD</Tag>) application, which provides allowance,
              compliance, emissions and facility/unit attributes data collected
              under EPA’s federal market-based trading programs. The beta APIs
              listed below are for the Emissions Collection and Monitoring Plan
              System ( <Tag>ECMPS</Tag>) 2.0, which is the tool used by
              emissions sources to report monitoring plans and QA tests,
              emissions, and operating data to EPA.
            </p>
            <p>
              <b>Note:</b> The data obtained through CAMPD and the supporting
              APIs come from the raw data submitted to ECMPS and have emissions
              data that are apportioned for units with complex configurations,
              whereas the emissions data found in ECMPS are raw reported data
              without apportionment. For more detailed information about the
              data CAPD collects and the specific difference between ECMPS and
              CAMPD visit the "
              <a
                href="https://www.epa.gov/airmarkets/power-sector-emissions-data"
                target="_blank"
                rel="noopener noreferrer"
              >
                Power Sector Emissions Data resource page
              </a>
              " and read more in the following document: {""}
              <a
                href="https://www.epa.gov/system/files/documents/2022-07/CAMD%27s%20Power%20Sector%20Emissions%20Data%20Guide%20-%2007182022.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Power Sector Emissions Data Guide (pdf)
              </a>
              .
            </p>

            <Alert>
              The ECMPS 2.0 {<Tag>beta</Tag>} tag in the beta section below
              indicate that these APIs are in beta, which means they do not
              contain up-to-date data and are not guaranteed to be stable.{" "}
              <b>
                These Beta APIs are only available for testing and should not be
                used in production applications.
              </b>{" "}
              Visit the "
              <a href="https://www.epa.gov/power-sector/ecmps-re-engineering-effort">
                ECMPS 2.0 re-engineering page
              </a>
              " for more information about the ECMPS re-engineering effort.
            </Alert>
          </Grid>
        </Grid>
        <br />
        <Grid row>
          <h2>Production API Documentation</h2>
          <CardGroup>
            {constants.swaggerPages
              .filter((page) => page.env === "prod")
              .map((page, index) => {
                return <APIDocCard page={page} index={index}></APIDocCard>;
              })}
          </CardGroup>
        </Grid>

        <Grid row>
          <h2>Beta API Documentation</h2>
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
