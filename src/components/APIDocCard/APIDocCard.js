import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Tag,
} from "@trussworks/react-uswds";
import React, { useRef, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";

export const APIDocCard = ({ page, index }) => {
  const apiCardDocsRef = useRef(null);
  useEffect(() => {
    apiCardDocsRef.current.focus();
  });

  return (
    <Card gridLayout={{ desktop: { col: 4 } }} key={index} align="left">
      <CardHeader>
        <h2
          card-testid="card-title"
          tabIndex={-1}
          ref={apiCardDocsRef}
          style={{ outline: "none" }}
        >
          {page.title}
        </h2>
      </CardHeader>
      <CardBody>
        <Tag>{page.tags}</Tag>
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
};
