import React from "react";
import { Link as USWDSLink, Button } from "@trussworks/react-uswds";
import { Link as RouterLink } from "react-router-dom";
import { constants } from "../../helpers/constants";

export const SubHeader = () => {
  return (
    <>
      <ul
        className="usa-nav__primary usa-header--extended usa-accordion"
        style={{ borderTop: "1px solid #dfe1e2" }}
      >
        {constants.subHeaderMenuList.map((el, ind) => {
          return (
            <li key={ind} className="usa-nav__primary-item">
              {el.external ? (
                <USWDSLink href={el.link} target="_blank">
                  {el.label}
                </USWDSLink>
              ) : (
                <RouterLink to={el.link}>{el.label}</RouterLink>
              )}
            </li>
          );
        })}
        {/* Padding 0 to make the button stay within the header as the same size of the other links and margin-left: auto to shift the button to right adjust */}
        <li
          key="signup"
          className="usa-button"
          style={{ padding: 0, marginLeft: "auto" }}
        >
          <RouterLink to="/api-key-signup" rel="noopener noreferrer">
            <Button
              // Have to manually color the button text white, since it inherits the gray from the usa-nav header class
              style={{ color: "#fff" }}
              type="button"
            >
              Request an API Key
            </Button>
          </RouterLink>
        </li>
      </ul>
    </>
  );
};
