import { Grid, GridContainer } from "@trussworks/react-uswds";
import React from "react";
import { About } from "../About/About.js";
import { HomePageCards } from "../HomePageCards/HomePageCards";

export const HomePage = () => {
  return (
    <main>
      <GridContainer>
        <Grid row>
          <Grid>
            <About />
          </Grid>

          <Grid row className="padding-3">
            <HomePageCards />
          </Grid>
        </Grid>
      </GridContainer>
    </main>
  );
};
