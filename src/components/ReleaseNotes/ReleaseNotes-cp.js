import { Accordion, Grid, GridContainer } from "@trussworks/react-uswds";
import React from "react";
import { constants } from "../../helpers/constants";

export const ReleaseNotes = () => {
  return (
    <GridContainer>
      <Grid row gap>
        <Grid desktop={{ col: true }} className="text-left">
          <h1>Release Notes</h1>
          <h2>testing</h2>
          <h3>testing</h3>
        </Grid>
      </Grid>
      <Grid row gap>
        <Accordion
          items={constants.releasePages.map((page, index) => {
            return Object.assign({}, page, {
              title: `${page.name}`,
              content: (
                <ul className="usa-list usa-list--unstyled" align="left">
                  <li>
                    Version: {page.version} / Published Date: {page.publish}
                  </li>
                  <li>Feature: </li>
                  <li>Bug fix:</li>
                </ul>
              ),
              expanded: false,
              id: page + index,
            });
          })}
          multiselectable={true}
        />
      </Grid>
    </GridContainer>
  );
};
