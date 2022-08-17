import React, { useRef, useEffect } from "react";
import {
  GridContainer,
  Grid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  IconAssessment,
  IconInsights,
  CardGroup,
} from "@trussworks/react-uswds";

export const RelatedResources = () => {
  const relatedRef = useRef(null);
  useEffect(() => {
    relatedRef.current.focus();
  });
  return (
    <article>
      <GridContainer>
        <Grid row gap>
          <Grid desktop={{ col: 12 }} className="text-left">
            <h1 tabIndex={-1} ref={relatedRef} style={{ outline: "none" }}>
              Related Resources
            </h1>
            <p>
              {" "}
              Resources about the data and programs related to CAMPD and ECMPS,
              APIs, and Swagger documentation.
            </p>
          </Grid>
          <Grid row className="padding-2">
            <CardGroup>
              <Card gridLayout={{ tablet: { col: 6 } }}>
                <CardHeader align="center">
                  <h2>Clean Air Markets Data Resources</h2>
                  <IconAssessment
                    size={4}
                    title="Icon for other card"
                    className="palette-color-grayscale"
                  />
                </CardHeader>

                <CardBody align="left">
                  <p>
                    Most resources about the data and programs related to CAMPD
                    and ECMPS can be found in the Clean Air Markets resources
                    below:
                  </p>
                  <ul>
                    <li>
                      <p>
                        {" "}
                        <a
                          href="https://www.epa.gov/airmarkets/data-resources"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          {" "}
                          CAMD Data Resources
                        </a>{" "}
                      </p>
                    </li>
                    <li>
                      <p>
                        {" "}
                        <a
                          href="https://www.epa.gov/airmarkets/power-sector-emissions-data"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          {" "}
                          Power Sector Emissions Data
                        </a>{" "}
                      </p>
                    </li>
                    <li>
                      <p>
                        {" "}
                        <a
                          href="https://www.epa.gov/airmarkets/summary-data"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          {" "}
                          Summary Data
                        </a>{" "}
                      </p>
                    </li>
                    <li>
                      <p>
                        {" "}
                        <a
                          href="https://www.epa.gov/airmarkets/frequent-questions-about-camd-re-engineering-effort"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          {" "}
                          Frequent questions about the CAMD re-engineering
                          effort
                        </a>{" "}
                      </p>
                    </li>
                  </ul>
                </CardBody>

                <CardFooter></CardFooter>
              </Card>
              <Card gridLayout={{ tablet: { col: 6 } }}>
                <CardHeader align="center">
                  <h2>Application Programming Interface Resources</h2>
                  <IconInsights
                    size={4}
                    title="Icon for other card"
                    className="palette-color-grayscale"
                  />
                </CardHeader>

                <CardBody align="left">
                  <p>
                    For resources related to APIs and Swagger documentation see
                    the following websites:
                  </p>
                  <ul>
                    <li>
                      <p>
                        {" "}
                        <a
                          href="https://swagger.io/specification/"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          {" "}
                          OpenAPI Specification
                        </a>{" "}
                      </p>
                    </li>
                    <li>
                      <p>
                        {" "}
                        <a
                          href="https://swagger.io/docs/specification/about/"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          {" "}
                          What is OpenAPI?
                        </a>{" "}
                      </p>
                    </li>
                    <li>
                      <p>
                        {" "}
                        <a
                          href="https://swagger.io/docs/specification/2-0/what-is-swagger/"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          {" "}
                          What is Swagger?
                        </a>{" "}
                      </p>
                    </li>
                    <li>
                      <p>
                        {" "}
                        <a
                          href="https://swagger.io/docs/specification/basic-structure/"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          {" "}
                          Basic Structure of Swagger
                        </a>{" "}
                      </p>
                    </li>
                  </ul>
                </CardBody>

                <CardFooter></CardFooter>
              </Card>
            </CardGroup>
          </Grid>
        </Grid>
      </GridContainer>
    </article>
  );
};
