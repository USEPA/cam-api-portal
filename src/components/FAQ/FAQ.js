import React, { useRef, useEffect } from "react";
import { GridContainer, Grid } from "@trussworks/react-uswds";

export const FAQ = () => {
  const faqRef = useRef(null);
  useEffect(() => {
    faqRef.current.focus();
  });
  return (
    <GridContainer>
      <Grid row gap>
        <Grid desktop={{ col: 12 }} className="text-left">
          <h1 tabIndex={-1} ref={faqRef} style={{ outline: "none" }}>
            Frequently Asked Questions
          </h1>
          <p>
            There are currently no FAQs, but they will be added as questions are
            submitted. Please visit the{" "}
            <a
              href="https://www.epa.gov/airmarkets/forms/cam-api-contact-us"
              target="_blank"
              rel="noreferrer noopener"
            >
              Provide Feedback
            </a>{" "}
            page to ask questions about the CAM API.
          </p>
        </Grid>
      </Grid>

      {/* <div class="usa-accordion usa-accordion">
                <h2 class="usa-accordion__heading">
                    <button class="usa-accordion__button" aria-expanded="true" aria-controls="unique-id-1">
                    How do I make an accordion’s content shown by default?
                    </button>
                </h2>
                <div id="unique-id-1" class="usa-accordion__container">
                    <div class="usa-accordion">
                    <p>Follow this example! Mark the <code>.usa-accordion__button</code> with <code>aria-expanded="true"</code> to indicate that the content referenced with the ID listed in <code>aria-controls</code> is expanded by default, and omit the <code>hidden</code> attribute on the related <code>.usa-accordion__content</code>.</p>
                    </div>
                </div>

                <h2 class="usa-accordion__heading">
                    <button class="usa-accordion__button" aria-controls="unique-id-2">
                    How do I make an accordion’s content hidden by default?
                    </button>
                </h2>
                <div id="unique-id-2" class="usa-accordion__container">
                    <div class="usa-accordion">
                    <p>Do not mark any attributes, other than linking a header and content body by <code>aria-controls="unique-id"</code> and <code>id="unique-id"</code>. This ensures the content is accessible should JavaScript fail to load.</p>
                    </div>
                </div>

                <h2 class="usa-accordion__heading">
                    <button class="usa-accordion__button" aria-controls="unique-id-3">
                    How can I allow more than one accordion item to be open simultaneously?
                    </button>
                </h2>
                <div id="unique-id-3" class="usa-accordion__container">
                    <div class="usa-accordion">
                    <p>On the wrapping <code>.usa-accordion</code>, add the <code>aria-multiselectable="true"</code> attribute.</p>
                    </div>
                </div>
            </div> */}
    </GridContainer>
  );
};
