import React from "react";
import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { FacilitiesAPICard } from "./FacilitiesAPICard";
import { MemoryRouter } from "react-router-dom";

describe("Test the Facilities API Card", () => {
  test("renders the card header text", () => {
    render(
      <MemoryRouter>
        <FacilitiesAPICard />
      </MemoryRouter>
    );
    expect(screen.getByText(/Help & Resource/i)).toBeInTheDocument();
  });
});

expect.extend(toHaveNoViolations);

it("should pass axe accessibility tests", async () => {
  const { container } = render(
    <MemoryRouter>
      <FacilitiesAPICard />
    </MemoryRouter>
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
