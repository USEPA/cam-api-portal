import React from "react";

import { Link as RouterLink } from "react-router-dom";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Icon,
  CardGroup,
} from "@trussworks/react-uswds";

export const HomePageCards = () => {
  return (
    <section>
      <CardGroup>
        <Card gridLayout={{ desktop: { col: 6 } }} align="center">
          <CardHeader>
            <h2>API Documentation</h2>
            <Icon.ContentCopy size={4} title="Icon for API Docs" />
          </CardHeader>

          <CardBody>
            <p>View the API docs for all CAM API endpoints</p>
          </CardBody>

          <CardFooter>
            <RouterLink to="/documentation">Documentation</RouterLink>
          </CardFooter>
        </Card>

        <Card gridLayout={{ desktop: { col: 6 } }} align="center">
          <CardHeader>
            <h2>Help & Resources</h2>
            <Icon.Info
              size={4}
              title="Icon for other card"
              className="palette-color-grayscale"
            />
          </CardHeader>

          <CardBody>
            <p>
              Links to Overview, Related Resources, Frequent Questions, Release
              Notes and Contact Us
            </p>
          </CardBody>

          <CardFooter>
            <RouterLink to="/help-resources">Overview</RouterLink>
          </CardFooter>
        </Card>
      </CardGroup>
    </section>
  );
};
