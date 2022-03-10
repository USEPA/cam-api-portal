import React from "react";

import { Link as RouterLink } from "react-router-dom";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  IconContentCopy,
  CardGroup,
} from "@trussworks/react-uswds";

export const APIDocsCard = () => {
  return (
    <CardGroup>
      <Card>
        <CardHeader>
          <h2>API Documentation</h2>
        </CardHeader>

        <CardBody>
          <IconContentCopy size={4} aria-label={"Icon for API Docs card"} />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </CardBody>

        <CardFooter>
          <RouterLink to="/documentation" aria-label={"Documentation"}>
            Documentation
          </RouterLink>
        </CardFooter>
      </Card>
    </CardGroup>
  );
};
