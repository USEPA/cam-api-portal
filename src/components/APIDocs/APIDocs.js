import {
  Grid,
  GridContainer,
  CardGroup,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@trussworks/react-uswds";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { constants } from "../../helpers/constants";

export const APIDocs = () => {
  return (
    <article>
      <GridContainer>
        <Grid row gap>
          <Grid desktop={{ col: 12 }} className="text-left">
            <h1>API Documentation</h1>
            <p>
              Explore the following CAM API Swagger docs for endpoints that
              serve emissions, account, and compliance information.
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
                  align="center"
                >
                  <CardHeader>
                    <h2
                      className="usa-card__heading"
                      aria-label={`${page.title} API documents card`}
                    >
                      {page.title}
                    </h2>
                  </CardHeader>
                  <CardBody>
                    <p>{page.description}</p>
                  </CardBody>
                  <CardFooter>
                    <RouterLink
                      to={`/swagger/${page.name}`}
                      rel="noopener noreferrer"
                    >
                      <Button className="usa-button" type="button">
                        View docs
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
