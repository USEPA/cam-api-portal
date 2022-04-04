import { Grid, GridContainer } from "@trussworks/react-uswds";
import React from "react";
import { AccountAPICard } from "./AccountAPICard.js";
import { EmissionsAPICard } from "./EmissionsAPICard.js";
import { FacilitiesAPICard } from "./FacilitiesAPICard.js";

export const APIDocs = () => {
  return (
    <GridContainer>
      <Grid row gap>
        <Grid desktop={{ col: 8 }} className="text-left">
          <h1>APIDocs</h1>
          <p>Explore the CAM API Documentation</p>
        </Grid>
      </Grid>

      <Grid row gap>
        <Grid desktop={{ col: true }} className="text-left">
          <AccountAPICard />
        </Grid>
        <Grid desktop={{ col: true }} className="text-left">
          <FacilitiesAPICard />
        </Grid>
        <Grid desktop={{ col: true }} className="text-left">
          <EmissionsAPICard></EmissionsAPICard>
        </Grid>
      </Grid>
    </GridContainer>
  );
};
