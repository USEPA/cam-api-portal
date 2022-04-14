import React from "react";
import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { EmissionsAPICard } from "./EmissionsAPICard";
import { MemoryRouter } from "react-router-dom";

describe("Test the Emissions API Card", () => {
  test("renders the card header text", () => {
    render(
      <MemoryRouter>
        <EmissionsAPICard />
      </MemoryRouter>
    );
    expect(screen.getByText(/Help & Resource/i)).toBeInTheDocument();
  });
});

expect.extend(toHaveNoViolations);

it("should pass axe accessibility tests", async () => {
  const { container } = render(
    <MemoryRouter>
      <EmissionsAPICard />
    </MemoryRouter>
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
