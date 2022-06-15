import React from "react";
import {
  GridContainer,
  Grid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  IconCloud,
  IconApi,
  CardGroup,
} from "@trussworks/react-uswds";

export const RelatedResources = () => {
  return (
    <article>
      <GridContainer>
        <Grid row gap>
          <Grid desktop={{ col: 12 }} className="text-left">
            <h1 align="center">Related Resources</h1>

            <CardGroup>
              <Card gridLayout={{ tablet: { col: 6 } }}>
                <CardHeader align="center">
                  <IconCloud
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
                </CardBody>

                <CardFooter align="left">
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
                </CardFooter>
              </Card>
              <Card gridLayout={{ tablet: { col: 6 } }}>
                <CardHeader align="center">
                  <IconApi
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
                </CardBody>

                <CardFooter align="left">
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
                </CardFooter>
              </Card>
            </CardGroup>
          </Grid>
        </Grid>
      </GridContainer>
    </article>
  );
};
