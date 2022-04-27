import React from "react";
import { GridContainer, Grid } from "@trussworks/react-uswds";
import { HelpResourcesCards } from "../HelpResourcesCards/HelpResourcesCards";

export const HelpResources = () => {
  return (
    <GridContainer>
      <Grid row gap>
        <Grid desktop={{ col: 8 }} className="text-left">
          <h1 style={{ textAlign: "left" }}>Help & Resources</h1>
          <p style={{ textAlign: "left" }}>
            What to find in Help & Resources sections
          </p>
        </Grid>
        <Grid row className="padding-2">
          <HelpResourcesCards />
        </Grid>
      </Grid>
    </GridContainer>
  );
};
