import React from "react";
import {
  CardGroup,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Grid,
  GridContainer,
} from "@trussworks/react-uswds";
import { constants } from "../../helpers/constants";

export const ReleaseNotes = () => {
  return (
    <article>
      <GridContainer>
        <Grid row gap>
          <Grid desktop={{ col: true }} className="text-left">
            <h1>Release Notes</h1>
          </Grid>
        </Grid>
        <Grid row gap>
          <CardGroup>
            {constants.releasePages.map((page, index) => {
              return (
                <Card
                  gridLayout={{ desktop: { col: 6 } }}
                  key={index}
                  align="left"
                >
                  <CardHeader>
                    <h2
                      className="usa-card__heading"
                      aria-label={`${page.title} Release Notes card`}
                    >
                      {page.title}
                    </h2>
                  </CardHeader>
                  <CardBody>
                    <p>{page.description}</p>
                  </CardBody>
                  <CardFooter>
                    <p className="card-text">
                      <ul className="usa-list usa-list--unstyled">
                        <li>
                          <strong>Version: {page.version} </strong>
                        </li>
                        <li>
                          <strong>Published date: {page.publish} </strong>
                        </li>
                      </ul>
                    </p>
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
