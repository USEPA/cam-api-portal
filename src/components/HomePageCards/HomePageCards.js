import React from "react";

import { Link as RouterLink } from "react-router-dom";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  IconContentCopy,
  IconInfo,
  CardGroup,
} from "@trussworks/react-uswds";

export const HomePageCards = () => {
  return (
    <aside>
      <CardGroup>
        <Card gridLayout={{ tablet: { col: 6 } }}>
          <CardHeader>
            <h2>API Documentation</h2>
            <IconContentCopy size={4} title="Icon for API Docs" />
          </CardHeader>

          <CardBody>
            <p>View the API docs for all CAM API endpoints</p>
          </CardBody>

          <CardFooter>
            <RouterLink to="/documentation">Documentation</RouterLink>
          </CardFooter>
        </Card>

        <Card gridLayout={{ tablet: { col: 6 } }}>
          <CardHeader align="center">
            <h2>Help & Resources</h2>
            <IconInfo
              size={4}
              title="Icon for other card"
              className="palette-color-grayscale"
            />
          </CardHeader>

          <CardBody>
            <p>
              Links to Overview, Related Resources, FAQs, Release Notes and
              Contact Us
            </p>
          </CardBody>

          <CardFooter>
            <RouterLink to="/help-resources">Overview</RouterLink>
          </CardFooter>
        </Card>
      </CardGroup>
    </aside>
  );
};
