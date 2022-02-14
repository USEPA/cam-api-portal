import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { NotFoundPage } from "./NotFoundPage";
import { axe, toHaveNoViolations } from "jest-axe";

test("renders the NotFound page with 404 message", () => {
  render(
    <MemoryRouter>
      <NotFoundPage />
    </MemoryRouter>
  );

  const linkElement = screen.getByText(/404/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders the NotFound page with Page Not Found message", () => {
  render(
    <MemoryRouter>
      <NotFoundPage />
    </MemoryRouter>
  );

  const linkElement = screen.getByText(/Page Not Found/i);
  expect(linkElement).toBeInTheDocument();
});

expect.extend(toHaveNoViolations);

it("should pass axe accessibility tests", async () => {
  const { container } = render(
    <MemoryRouter>
      <NotFoundPage />
    </MemoryRouter>
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
