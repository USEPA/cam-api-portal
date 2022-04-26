import {
  Grid,
  GridContainer,
  CardGroup,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@trussworks/react-uswds";
import React from "react";
import { constants } from "../../helpers/constants";
import { useNavigate } from "react-router-dom";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage";

export const APIDocs = () => {
  const navigate = useNavigate();

  const [apiPages, setAPIPages] = React.useState([]);
  React.useEffect(() => {
    const fetchAPIPages = async () => {
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
      setAPIPages(pages);
    };
    fetchAPIPages();
  }, []);
  return (
    <GridContainer>
      <Grid row gap>
        <Grid desktop={{ col: 8 }} className="text-left">
          <h1>APIDocs</h1>
          <p>Explore the CAM API Documentation</p>
        </Grid>
      </Grid>
      <Grid row gap>
        <CardGroup>
          {apiPages.map((page, index) => {
            let info = page.info;
            return (
              <Card gridLayout={{ desktop: { col: 4 } }} key={index}>
                <CardHeader align="center">
                  <h3>{info.title}</h3>
                </CardHeader>
                <CardBody>
                  <p>{info.description}</p>
                </CardBody>
                <CardFooter>
                  <Button
                    type="button"
                    onClick={() => navigate(`/swagger/${page.meta.name}`)}
                  >
                    Go to docs
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </CardGroup>
      </Grid>
    </GridContainer>
  );
};
