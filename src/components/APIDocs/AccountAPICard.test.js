import React from "react";
import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { AccountAPICard } from "./AccountAPICard";
import { MemoryRouter } from "react-router-dom";

describe("Test the Help Resource Card", () => {
  test("renders the card header text", () => {
    render(
      <MemoryRouter>
        <AccountAPICard />
      </MemoryRouter>
    );
    expect(screen.getByText(/Help & Resource/i)).toBeInTheDocument();
  });
});

expect.extend(toHaveNoViolations);

it("should pass axe accessibility tests", async () => {
  const { container } = render(
    <MemoryRouter>
      <AccountAPICard />
    </MemoryRouter>
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
