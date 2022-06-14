import React from "react";
import { render, screen } from "@testing-library/react";
import { SubHeader } from "./SubHeader";
import { axe, toHaveNoViolations } from "jest-axe";

test("renders the SubHeader page", () => {
  render(<SubHeader />);
  expect(screen.getByText(/CAM API/i)).toBeInTheDocument();
});

expect.extend(toHaveNoViolations);

it("should pass axe accessibility tests", async () => {
  const { container } = render(<SubHeader />);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
