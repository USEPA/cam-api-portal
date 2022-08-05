import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Button, Grid } from "@trussworks/react-uswds";

export const About = () => {
  return (
    <div>
      <Grid row gap>
        <Grid desktop={{ col: true }} className="text-left">
          <h1>About CAM API</h1>
          <p>
            These Representational State Transfer (REST) APIs provide access to
            a variety of data the Clean Air Markets Division (CAMD) collects to
            run programs designed to reduce air pollution from power
            plants.&nbsp; Developers can use these APIs to build applications or
            create analyses using a variety of platforms.
          </p>
          <RouterLink to="/api-key-signup" rel="noopener noreferrer">
            <Button
              // Have to manually color the button text white, since it inherits the gray from the usa-nav header class
              className="usa-button"
              type="button"
            >
              Request an API Key
            </Button>
          </RouterLink>
        </Grid>
      </Grid>

      <Grid row gap className="padding-top-3">
        <Grid desktop={{ col: true }} className="text-left">
          <h2>CAMPD</h2>
          <p>
            The Clean Air Markets Program Data (CAMPD) web application is the
            data publication warehouse for allowance, compliance, emissions and
            facility/unit attributes data collected under EPA’s federal
            market-based trading programs.
          </p>

          <a
            href="https://campd.epa.gov"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="usa-button">CAMPD Application</Button>
          </a>
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

          <a
            href="https://easey-beta.app.cloud.gov/ecmps"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="usa-button">ECMPS 2.0 Application</Button>
          </a>
        </Grid>
      </Grid>
    </div>
  );
};
