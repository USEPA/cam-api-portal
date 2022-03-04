import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Link,
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
              <Link to="/overview">Overview</Link>
            </li>
            <li>
              <Link to="/related">Related Resources</Link>
            </li>
            <li>
              <Link to="/faq">FAQs</Link>
            </li>
            <li>
              <Link to="/release">Release Notes</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </CardFooter>
      </Card>
    </CardGroup>
  );
};
