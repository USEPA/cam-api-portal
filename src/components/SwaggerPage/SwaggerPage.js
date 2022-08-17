import React, { useRef, useEffect } from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import { constants } from "../../helpers/constants";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage";
import { useParams } from "react-router-dom";
import { GridContainer } from "@trussworks/react-uswds";

export const SwaggerPage = (props) => {
  const swagRef = useRef(null);
  useEffect(() => {
    swagRef.current.focus();
  });
  let { endpoint } = useParams();

  if (!endpoint) {
    return <NotFoundPage ref={swagRef} />;
  }

  let page = constants.swaggerPages.find((page) => page.name === endpoint);

  if (!page) {
    return <NotFoundPage ref={swagRef} />;
  }
  return (
    <article
      tabIndex={-1}
      ref={swagRef}
      style={{ outline: "none" }}
      aria-label="Swagger documentation page"
    >
      <GridContainer>
        <SwaggerUI url={page.url} />
      </GridContainer>
    </article>
  );
};
