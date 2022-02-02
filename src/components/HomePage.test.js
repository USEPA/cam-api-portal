import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { HomePage } from "./HomePage";

test("renders the home page", () => {
  render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  );

  const linkElement = screen.getByText(/About CAM API/i);
  expect(linkElement).toBeInTheDocument();
});
