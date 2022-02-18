import React from "react";
import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { HelpResourceCard } from "./HelpResourceCard";

describe("Test the Help Resource Card", () => {
  test("renders the card header text", () => {
    render(<HelpResourceCard />);
    expect(screen.getByText(/Help & Resource/i)).toBeInTheDocument();
  });
});

expect.extend(toHaveNoViolations);

it("should pass axe accessibility tests", async () => {
  const { container } = render(<HelpResourceCard />);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
