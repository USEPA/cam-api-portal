import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { GrCircleInformation } from "react-icons/gr";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardGroup,
} from "@trussworks/react-uswds";

export const HelpResourceCard = () => {
  const iconStyles = { fontSize: "2em" };

  return (
    <CardGroup>
      <Card>
        <CardHeader align="center">
          <h2>Help & Resources</h2>
          <GrCircleInformation style={iconStyles} />
        </CardHeader>

        <CardBody>
          <p>
            Links to Overview, Related Resources, FAQs, Release Notes and
            Contact Us
          </p>
        </CardBody>

        <CardFooter>
          <RouterLink to="/overview">Overview</RouterLink>
        </CardFooter>
      </Card>
    </CardGroup>
  );
};
