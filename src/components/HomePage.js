import { CardGroup, Grid, GridContainer } from "@trussworks/react-uswds";
import React from "react";

import { About } from "./About/About.js";
import { APIDocsCard } from "./APIDocsCard.js";

export const HomePage = () => {
  return (
    <GridContainer>
      <Grid row className="padding-3">
        <About />
      </Grid>

      <Grid row className="padding-3">
        <APIDocsCard />
      </Grid>
    </GridContainer>
  );
};
