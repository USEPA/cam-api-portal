import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { HomePage } from "./HomePage";
import { axe, toHaveNoViolations } from "jest-axe";

test("renders the home page", () => {
  render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  );

  const linkElement = screen.getByText(/About CAM API/i);
  expect(linkElement).toBeInTheDocument();
});

expect.extend(toHaveNoViolations);

it("should pass axe accessibility tests", async () => {
  const { container } = render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
