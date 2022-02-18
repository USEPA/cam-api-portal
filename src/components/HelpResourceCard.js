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
              <Link
                href={"https://www.epa.gov/airmarkets/overview"}
                target="_blank"
              >
                Overview
              </Link>
            </li>
            <li>
              <Link
                href={"https://www.epa.gov/airmarkets/data-resources"}
                target="_blank"
              >
                Related Resources
              </Link>
            </li>
            <li>
              <Link
                href={"https://www.epa.gov/airmarkets/faqs"}
                target="_blank"
              >
                FAQs
              </Link>
            </li>
            <li>
              <Link
                href={"https://www.epa.gov/airmarkets/release-notes"}
                target="_blank"
              >
                Release Notes
              </Link>
            </li>
            <li>
              <Link
                href={"https://www.epa.gov/airmarkets/contact-us"}
                target="_blank"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </CardFooter>
      </Card>
    </CardGroup>
  );
};
