import { Grid, GridContainer } from "@trussworks/react-uswds";
import React from "react";
import { About } from "./About/About.js";
import { HelpResourceCard } from "./HelpResourceCard.js";

export const HomePage = () => {
  return (
    <GridContainer>
      <Grid row className="padding-3">
        <About />
      </Grid>

      <Grid row gap>
        <Grid desktop={{ col: true }} className="text-center">
          <p>Insert API Docs Card</p>
        </Grid>
        <Grid desktop={{ col: true }} className="text-left">
          <HelpResourceCard />
        </Grid>
      </Grid>
    </GridContainer>
  );
};
