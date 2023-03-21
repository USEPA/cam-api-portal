import {
  Grid,
  GridContainer,
  CardGroup,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Tag,
} from "@trussworks/react-uswds";
import React, { useRef, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { constants } from "../../helpers/constants";

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
              <br></br>
              <br></br>
              The ECMPS 2.0 Beta tag indicates there are beta API endpoints
              (non-production) available for testing. Visit the ECMPS 2.0 Beta
              app{" "}
              <a href="https://ecmps-beta.app.cloud.gov/reporting-instructions">
                Reporting Instructions
              </a>{" "}
              to explore the Beta API Swagger docs.
            </p>
          </Grid>
        </Grid>
        <Grid row gap>
          <CardGroup>
            {constants.swaggerPages.map((page, index) => {
              return (
                <Card
                  gridLayout={{ desktop: { col: 6 } }}
                  key={index}
                  align="left"
                >
                  <CardHeader>
                    <h2 aria-label={`${page.title} API documents card`}>
                      {page.title}
                    </h2>
                  </CardHeader>
                  <CardBody>
                    <Tag>{page.tag}</Tag>
                    <p>{page.description}</p>
                  </CardBody>
                  <CardFooter>
                    <RouterLink
                      to={`/swagger/${page.name}`}
                      rel="noopener noreferrer"
                      aria-label={`Link to ${page.title} API documentation`}
                    >
                      <Button className="usa-button" type="button">
                        View {page.title} docs
                      </Button>
                    </RouterLink>
                  </CardFooter>
                </Card>
              );
            })}
          </CardGroup>
        </Grid>
      </GridContainer>
    </article>
  );
};
