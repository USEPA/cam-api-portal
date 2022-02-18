import React from "react";
import { render, screen } from "@testing-library/react";
import { HomePage } from "./HomePage";
import { axe, toHaveNoViolations } from "jest-axe";

test("renders the home page", () => {
  render(<HomePage />);
  expect(screen.getByText(/About CAM API/i)).toBeInTheDocument();
});

expect.extend(toHaveNoViolations);

it("should pass axe accessibility tests", async () => {
  const { container } = render(<HomePage />);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
