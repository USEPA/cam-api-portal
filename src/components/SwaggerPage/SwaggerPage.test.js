import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { SwaggerPage } from "./SwaggerPage";
import { axe, toHaveNoViolations } from "jest-axe";
import Router, { MemoryRouter } from "react-router-dom";

jest.setTimeout(30000);
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}));

// We can't test the SwaggerPage component using the actual swagger-json
// pages, because jsdom doesn't support cross origin requests to localhost.
// We also can't override any of this because we're using create-react-app
// which prevents customization of the jest config. So, we'll just test the
// funcionallity in the SwaggerPage component that tests to make sure we have a
// valid path before attempting to render the page.
describe("test the Swagger page", () => {
  it("does not attempt to render an invalid swagger page", async () => {
    jest.spyOn(Router, "useParams").mockReturnValue({
      endpoint: "invalid-path",
    });
    render(
      <MemoryRouter initialEntries={["/swagger/invalid-path"]}>
        <SwaggerPage />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText(/404/i)).toBeInTheDocument();
    });
  });

  it("does not attempt to render an empty swagger page", async () => {
    jest.spyOn(Router, "useParams").mockReturnValue({
      endpoint: "",
    });
    render(
      <MemoryRouter initialEntries={["/swagger/"]}>
        <SwaggerPage />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText(/404/i)).toBeInTheDocument();
    });
  });
});
