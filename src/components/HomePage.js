import { Grid, GridContainer } from "@trussworks/react-uswds";
import React from "react";
import { About } from "./About/About.js";
import { APIDocsCard } from "./APIDocsCard.js";
import { HelpResourceCard } from "./HelpResourceCard.js";

export const HomePage = () => {
  return (
    <GridContainer>
      <Grid row gap>
        <About />
      </Grid>
      <Grid row gap>
        <Grid desktop={{ col: true }} className="text-center">
          <APIDocsCard />
        </Grid>
        <Grid desktop={{ col: true }} className="text-left">
          <HelpResourceCard />
        </Grid>
      </Grid>
    </GridContainer>
  );
};
