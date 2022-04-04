import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardGroup,
  Button,
} from "@trussworks/react-uswds";

export const FacilitiesAPICard = () => {
  return (
    <CardGroup>
      <Card>
        <CardHeader align="center">
          <h2>Facilities API</h2>
        </CardHeader>

        <CardBody>
          <p>lorem ipsum</p>
        </CardBody>

        <CardFooter>
          <Button
            className="usa-button"
            onClick={() => window.open("https://epa.gov/", "_blank")}
          >
            View Docs
          </Button>
        </CardFooter>
      </Card>
    </CardGroup>
  );
};
