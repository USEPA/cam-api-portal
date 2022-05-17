import React from "react";
import { render, screen } from "@testing-library/react";
import { ReleaseNotes } from "./ReleaseNotes";
import { axe, toHaveNoViolations } from "jest-axe";

test("renders the Release Notes page", () => {
  render(<ReleaseNotes />);
  expect(screen.getByText(/Release Notes/i)).toBeInTheDocument();
});

expect.extend(toHaveNoViolations);

it("should pass axe accessibility tests", async () => {
  const { container } = render(<ReleaseNotes />);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
