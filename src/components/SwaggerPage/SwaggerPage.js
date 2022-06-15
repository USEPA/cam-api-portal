import React from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import { constants } from "../../helpers/constants";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage";
import { useParams } from "react-router-dom";
import { GridContainer } from "@trussworks/react-uswds";

export const SwaggerPage = (props) => {
  let { endpoint } = useParams();

  if (!endpoint) {
    return <NotFoundPage />;
  }

  let page = constants.swaggerPages.find((page) => page.name === endpoint);

  if (!page) {
    return <NotFoundPage />;
  }
  return (
    <GridContainer>
      <SwaggerUI url={page.url} />
    </GridContainer>
  );
};
