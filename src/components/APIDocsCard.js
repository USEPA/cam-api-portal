import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  IconContentCopy,
  Link,
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
          <Link href={"https://www.epa.gov/"}>Documentation</Link>
        </CardFooter>
      </Card>
    </CardGroup>
  );
};
