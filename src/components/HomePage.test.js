import React from "react";
import { render, screen } from "@testing-library/react";
import { HomePage } from "./HomePage";
import { axe, toHaveNoViolations } from "jest-axe";
import { MemoryRouter } from "react-router-dom";

jest.setTimeout(30000);

test("renders the home page", () => {
  render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  );
  expect(screen.getByText(/About CAM API/i)).toBeInTheDocument();
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

