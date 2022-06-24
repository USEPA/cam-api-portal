import React from "react";
import { GridContainer, Grid } from "@trussworks/react-uswds";
import { Link as RouterLink } from "react-router-dom";

/*Import Icons from https://designsystem.digital.gov/components/icon/ using title case*/
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  IconHelpOutline,
  IconReduceCapacity,
  IconFlag,
  // IconMap,
  CardGroup,
} from "@trussworks/react-uswds";

export const HelpResources = () => {
  return (
    <GridContainer>
      <Grid row gap>
        <Grid desktop={{ col: true }} className="text-left">
          <h1>Help & Resources</h1>
          <p>
            The Clean Air Markets APIs provide a large amount of detailed power
            sector emissions data. Below are resources that can be used to help
            understand these data as well as using the API endpoints to obtain
            them.
          </p>
        </Grid>
        <Grid row className="padding-2">
          <article>
            <CardGroup>
              <Card gridLayout={{ tablet: { col: 4 } }} align="center">
                <CardHeader>
                  <h2>Related Resources</h2>
                  <IconReduceCapacity size={4} title="Icon for API Docs" />
                </CardHeader>

                <CardBody>
                  <p>View resources related to CAMD data</p>
                </CardBody>

                <CardFooter>
                  <RouterLink to="/related-resources">
                    Related Resources
                  </RouterLink>
                </CardFooter>
              </Card>

              <Card gridLayout={{ tablet: { col: 4 } }} align="center">
                <CardHeader>
                  <h2>Release Notes</h2>
                  <IconFlag
                    size={4}
                    title="Icon for other card"
                    className="palette-color-grayscale"
                  />
                </CardHeader>

                <CardBody>
                  <p>Information on CAM API Updates.</p>
                </CardBody>

                <CardFooter>
                  <RouterLink to="/release-notes">Release Notes</RouterLink>
                </CardFooter>
              </Card>

              <Card gridLayout={{ tablet: { col: 4 } }} align="center">
                <CardHeader>
                  <h2>FAQs</h2>
                  <IconHelpOutline
                    size={4}
                    title="Icon for other card"
                    className="palette-color-grayscale"
                  />
                </CardHeader>

                <CardBody>
                  <p>Frequently Asked Questions about the CAM API</p>
                </CardBody>

                <CardFooter>
                  <RouterLink to="/faq">FAQs</RouterLink>
                </CardFooter>
              </Card>
              {/* <Card gridLayout={{ tablet: { col: 4 } }}  align="center">
                <CardHeader>
                  <h2>API Guides</h2>
                  <IconMap
                    size={4}
                    title="Icon for other card"
                    className="palette-color-grayscale"
                  />
                </CardHeader>
                <CardBody>
                  <p>View guides on how to use CAMD's API.</p>
                </CardBody>
                <CardFooter>
                  <RouterLink to="/api-guides">API Guides</RouterLink>
                </CardFooter>
              </Card> */}
              <Card gridLayout={{ tablet: { col: 4 } }} align="center">
                <CardHeader>
                  <h2>Contact Us</h2>
                  <IconFlag
                    size={4}
                    title="Icon for other card"
                    className="palette-color-grayscale"
                  />
                </CardHeader>

                <CardBody>
                  <p>Reach out to CAMD for further questions</p>
                </CardBody>

                <CardFooter>
                  <a
                    href="https://www.epa.gov/airmarkets/forms/cam-api-contact-us"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Contact Us
                  </a>
                </CardFooter>
              </Card>
            </CardGroup>
          </article>
        </Grid>
      </Grid>
    </GridContainer>
  );
};
