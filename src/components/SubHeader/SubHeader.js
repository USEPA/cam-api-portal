import React from "react";
import { Link as USWDSLink } from "@trussworks/react-uswds";
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
      </ul>
    </>
  );
};
