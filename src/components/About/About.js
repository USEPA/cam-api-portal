import React, { useState } from "react";

import { Button, GridContainer, Grid, Link } from "@trussworks/react-uswds";

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
          <Button type="button">Request an API Key</Button>
        </Grid>

        <Grid desktop={{ col: 4 }}>
          <p>Insert What's New box here</p>
        </Grid>
      </Grid>

      <Grid row gap>
        <Grid desktop={{ col: true }} className="text-left">
          <h2>CAMPD</h2>
          <p>
            The Clean Air Markets Program Data (CAMPD) web application is the
            data publication warehouse for allowance, compliance, emissions and
            facility/unit attributes data collected under EPA’s federal
            market-based trading programs: Cross-State Air Pollution Rule
            (CSAPR), CSAPR Update, Revised CSAPR Update, Acid Rain Program
            (ARP), and other retired programs. CAMPD provides current and
            historical data using the Clean Air Markets (CAM) API portal.
          </p>

          <Button type="button" inverse>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={
                "https://campd-dev.app.cloud.gov/resources/related-resources"
              }
            >
              CAMPD Application
            </Link>
          </Button>
        </Grid>

        <Grid desktop={{ col: true }} className="text-left">
          <h2>ECMPS 2.0</h2>
          <p>
            The Emissions Collection and Monitoring Plan System 2.0 Beta is the
            new web-based reporting tool released in beta form to allow industry
            users and the public to begin testing and learning the new
            application. The initial application, released in December of 2021,
            begins with the limited functionality of view (no login required)
            and edit/evaluate (CDX Test login required) of monitoring plan data.
            Subsequent releases throughout 2022 will add other functionality.
            Data in the beta is not production data and is only being used for
            testing purposes.
          </p>

          <Button type="button" inverse>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={"https://easey-beta.app.cloud.gov/ecmps/"}
            >
              ECMPS 2.0 Application
            </Link>
          </Button>
        </Grid>
      </Grid>
    </GridContainer>
  );
};
