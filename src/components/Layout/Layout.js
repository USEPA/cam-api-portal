import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { SubHeader } from "../SubHeader/SubHeader";
import { Alert } from "@trussworks/react-uswds";
import Icons from "../../themes/epa_themes/images/sprite.svg";

export const Layout = () => {
  /* Manually add exit icons for external links since drupal does this only once after page load

  Add in the exit icon after checking for icons on page load (could just assume we need to add the icons every react-router location change, but someone could a page from a bookmark and end up with two icons if we just put it there automatically)

  Include the svg file for local development and use NODE_ENV to change href based on environment

  Use the useLocation hook from react-router-dom to determine when we render a new page to check for external links and add the icon.

  This is done using DOM operations instead of react components because we have to check if there's an icon added to the DOM by Drupal before adding our own, plus we're still using the svg file hosted on the EPA server (and the "use" tag for an svg file doesn't allow cross origin hrefs), so it's not straightforward. Another way would be to use a global state to check if icons were applied and/or use a custom component that checks on page load and wrap each link in a component that shows/hides the exit icon based on that state.

  If this is unreliable or does not perform well/someone has a strong opinion, we can change it to a more Reacty solution with custom components and state.
  */
  let template = document.createElement("template");
  template.innerHTML = `<svg class='icon icon--exit is-spaced-before' role='img' height='16.5px' width='16.5px' fill='currentColor'><title>Exit EPA’s website</title><use href=${
    process.env.NODE_ENV === "development"
      ? `${Icons}#launch`
      : "/themes/epa_theme/images/sprite.svg#launch"
  }></use></svg>`;

  const location = useLocation();
  useEffect(() => {
    const onPageLoad = () => {
      const exitIcons = document.querySelectorAll("div.App svg.icon--exit");
      if (exitIcons.length === 0) {
        let exitLinks = Array.from(
          document.querySelectorAll(
            "div.App a:not([href*='epa.gov'])[href*=':']"
          )
        );
        exitLinks.forEach((el) => {
          el.appendChild(template.content.cloneNode(true));
        });
      }
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, [location, template]);
  return (
    <div>
      <SubHeader />
      <Alert
        type="info"
        align="left"
        style={{ marginTop: 0 }}
        // headingLevel prop is from a newer version of @trussworks/react-uswds
        //headingLevel="h4"
        slim
      >
        The Clean Air Markets Program Data (CAMPD) 1.3 has been released! Click{" "}
        <a
          href="https://campd.epa.gov/"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>{" "}
        to check it out!
      </Alert>
      <main style={{ maxWidth: "64rem", margin: "0 auto" }}>
        <Outlet />
      </main>
    </div>
  );
};
