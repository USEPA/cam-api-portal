import { Grid, GridContainer } from "@trussworks/react-uswds";
import React from "react";
import { About } from "../About/About.js";
import { HomePageCards } from "../HomePageCards/HomePageCards";

export const HomePage = () => {
  return (
    <GridContainer>
      <Grid row>
        <Grid>
          <About />
        </Grid>
        <Grid row className="padding-2">
          <HomePageCards />
        </Grid>
      </Grid>
    </GridContainer>
  );
};
