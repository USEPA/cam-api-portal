import React from "react";
import { render, screen } from "@testing-library/react";
import { NotFoundPage } from "./NotFoundPage";
import { axe, toHaveNoViolations } from "jest-axe";

test("renders the NotFound page with 404 message", () => {
  render(<NotFoundPage />);
  expect(screen.getByText(/404/i)).toBeInTheDocument();
});

test("renders the NotFound page with Page Not Found message", () => {
  render(<NotFoundPage />);
  expect(screen.getByText(/Page Not Found/i)).toBeInTheDocument();
});

expect.extend(toHaveNoViolations);

it("should pass axe accessibility tests", async () => {
  const { container } = render(<NotFoundPage />);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
