import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardGroup,
} from "@trussworks/react-uswds";

export const HelpResourceCard = () => {
  return (
    <CardGroup>
      <Card>
        <CardHeader>
          <h2>Help & Resources</h2>
        </CardHeader>

        <CardBody>
          <p>
            Links to Overview, Related Resources, FAQs, Release Notes and
            Contact Us
          </p>
        </CardBody>

        <CardFooter>
          <ul className="usa-list">
            <li>
              <RouterLink to="/overview">Overview</RouterLink>
            </li>
            <li>
              <RouterLink to="/related">Related Resources</RouterLink>
            </li>
            <li>
              <RouterLink to="/faq">FAQs</RouterLink>
            </li>
            <li>
              <RouterLink to="/release">Release Notes</RouterLink>
            </li>
            <li>
              <RouterLink to="/contact">Contact Us</RouterLink>
            </li>
          </ul>
        </CardFooter>
      </Card>
    </CardGroup>
  );
};
