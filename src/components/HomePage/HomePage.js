import { Grid, GridContainer } from "@trussworks/react-uswds";
import React from "react";
import { About } from "../About/About.js";
import { HomePageCards } from "../HomePageCards/HomePageCards";

export const HomePage = () => {
  return (
    <GridContainer>
      <About />
      <Grid row className="padding-3">
        <HomePageCards />
      </Grid>
    </GridContainer>
  );
};
