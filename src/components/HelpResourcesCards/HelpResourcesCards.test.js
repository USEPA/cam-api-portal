import React from "react";
import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { HelpResourcesCards } from "./HelpResourcesCards";
import { MemoryRouter } from "react-router-dom";

describe("Test the Help & Resources Card", () => {
  test("renders the card header text", () => {
    render(
      <MemoryRouter>
        <HelpResourcesCards />
      </MemoryRouter>
    );
    expect(
      screen.getByText(/Frequently Asked Questions about the CAM API./i)
    ).toBeInTheDocument();
  });
});

expect.extend(toHaveNoViolations);

it("should pass axe accessibility tests", async () => {
  const { container } = render(
    <MemoryRouter>
      <HelpResourcesCards />
    </MemoryRouter>
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
