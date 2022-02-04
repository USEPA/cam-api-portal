import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Layout } from "./Layout";

test("render the Layout for the CAM API pages", () => {
  render(
    <MemoryRouter>
      <Layout />
    </MemoryRouter>
  );

  const linkElement = screen.getByText(/CAM-API-Portal Subheader/i);
  expect(linkElement).toBeInTheDocument();
});
