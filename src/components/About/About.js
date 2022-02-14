import React from "react";

import { Button, GridContainer, Grid } from "@trussworks/react-uswds";
import { WhatIsNewBox } from "@us-epa-camd/easey-design-system";

export const About = () => {
  return (
    <GridContainer>
      <Grid row gap>
        <Grid desktop={{ col: 8 }} className="text-left">
          <h1>About CAM API</h1>
          <p>
            These REST APIs provide access to a variety of data the Clean Air
            Markets Division (CAMD) collects to run programs designed to reduce
            air pollution from power plants.&nbsp; Developers can use these APIs
            to build applications or create analyses using a variety of
            platforms.
          </p>

          <Button
            className="usa-button"
            onClick={() => window.open("https://epa.gov/", "_blank")}
          >
            Request an API Key
          </Button>
        </Grid>

        <Grid desktop={{ col: 4 }} className="padding-y-1 padding-x-1">
          <WhatIsNewBox title="What's New" text="Lorem ipsum dolor sit amet" />
        </Grid>
      </Grid>

      <Grid row gap>
        <Grid desktop={{ col: true }} className="text-left">
          <h2>CAMPD</h2>
          <p>
            The Clean Air Markets Program Data (CAMPD) web application is the
            data publication warehouse for allowance, compliance, emissions and
            facility/unit attributes data collected under EPA’s federal
            market-based trading programs.
          </p>

          <Button
            className="usa-button"
            onClick={() =>
              window.open("https://campd-dev.app.cloud.gov/", "_blank")
            }
          >
            CAMPD Application
          </Button>
        </Grid>

        <Grid desktop={{ col: true }} className="text-left">
          <h2>ECMPS 2.0 Beta</h2>
          <p>
            The Emissions Collection and Monitoring Plan System 2.0 Beta is the
            new web-based reporting tool released in beta form to allow industry
            users and the public to begin testing and learning the new
            application. Data in the beta is not production data and is only
            being used for testing purposes.
          </p>

          <Button
            className="usa-button"
            onClick={() =>
              window.open("https://easey-beta.app.cloud.gov/ecmps/", "_blank")
            }
          >
            ECMPS 2.0 Application
          </Button>
        </Grid>
      </Grid>
    </GridContainer>
  );
};
