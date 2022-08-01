import React from "react";
import { render, screen } from "@testing-library/react";
import { APIKeyPage, SubHeader } from "./APIKeyPage";
import { axe, toHaveNoViolations } from "jest-axe";
import { MemoryRouter } from "react-router-dom";

test("renders the APIKey page", () => {
  render(
    <MemoryRouter>
      <APIKeyPage />
    </MemoryRouter>
  );
  expect(screen.getByText(/Sign Up/i)).toBeInTheDocument();
});

expect.extend(toHaveNoViolations);

it("should pass axe accessibility tests", async () => {
  const { container } = render(
    <MemoryRouter>
      <APIKeyPage />
    </MemoryRouter>
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
