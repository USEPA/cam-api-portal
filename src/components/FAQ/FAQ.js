import React from "react";
import { GridContainer, Grid } from "@trussworks/react-uswds";
import { constants } from "../../helpers/constants";

export const FAQ = () => {
  return (
    <article>
      <GridContainer>
        <Grid row gap>
          <Grid className="text-left" desktop={{ col: true }}>
            <h1>Frequently Asked Questions</h1>
            <Grid row gap>
              {constants.faqPages.map((page, i) => {
                const paragraph = page.content;
                return (
                  <ul className="usa-list usa-list--unstyled" key={i}>
                    <li>
                      <strong>{page.title}</strong>
                      <p dangerouslySetInnerHTML={{ __html: paragraph }}></p>
                    </li>
                  </ul>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </GridContainer>
    </article>
  );
};
