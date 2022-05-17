import React from "react";
import {
  CardGroup,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Grid,
  GridContainer,
} from "@trussworks/react-uswds";
import { constants } from "../../helpers/constants";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage";

export const ReleaseNotes = () => {
  const [notesPages, setNotesPages] = React.useState([]);
  React.useEffect(() => {
    const fetchNotesPages = async () => {
      const response = Promise.all(
        constants.swaggerPages.map((page) => {
          return fetch(page.url)
            .then((response) => response.json())
            .then((json) => {
              json["meta"] = page;
              return json;
            })
            .catch((error) => {
              console.log(error);
              return <NotFoundPage />;
            });
        })
      );
      const pages = await response;
      setNotesPages(pages);
    };
    fetchNotesPages();
  }, []);
  return (
    <GridContainer>
      <Grid row gap>
        <Grid desktop={{ col: true }} className="text-left">
          <h1>Release Notes</h1>
        </Grid>
      </Grid>
      <Grid row gap>
        <CardGroup>
          {notesPages.map((page, index) => {
            let info = page.info;
            return (
              <Card
                gridLayout={{ desktop: { col: 4 } }}
                key={index}
                align="left"
              >
                <CardHeader align="left">
                  <h3>{info.title}</h3>
                </CardHeader>
                <CardBody>
                  <p>{page.meta.intro}</p>
                </CardBody>
                <CardFooter>
                  <p className="card-text" align="left">
                    <ul className="usa-list usa-list--unstyled">
                      <li>
                        <strong>Version: {info.version} </strong>
                      </li>
                      <li>Feature: </li>
                      <li>Bug fix:</li>
                    </ul>
                  </p>{" "}
                </CardFooter>
              </Card>
            );
          })}
        </CardGroup>
      </Grid>
    </GridContainer>
  );
};
