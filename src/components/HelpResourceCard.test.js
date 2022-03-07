import React from "react";
import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { HelpResourceCard } from "./HelpResourceCard";
import { MemoryRouter } from "react-router-dom";

describe("Test the Help Resource Card", () => {
  test("renders the card header text", () => {
    render(<HelpResourceCard />, { wrapper: MemoryRouter });
    expect(screen.getByText(/Help & Resource/i)).toBeInTheDocument();
  });
});

expect.extend(toHaveNoViolations);

it("should pass axe accessibility tests", async () => {
  const { container } = render(<HelpResourceCard />, { wrapper: MemoryRouter });
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
