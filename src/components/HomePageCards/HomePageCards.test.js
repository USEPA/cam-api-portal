import React from "react";
import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { HomePageCards } from "./HomePageCards.js";
import { MemoryRouter } from "react-router-dom";

describe("Test the API Docs Card", () => {
  test("renders the card header text", () => {
    render(
      <MemoryRouter>
        <HomePageCards />
      </MemoryRouter>
    );
    expect(screen.getByText(/API Documentation/i)).toBeInTheDocument();
  });
});

expect.extend(toHaveNoViolations);

it("should pass axe accessibility tests", async () => {
  const { container } = render(
    <MemoryRouter>
      <HomePageCards />
    </MemoryRouter>
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
