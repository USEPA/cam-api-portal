import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { HomePage } from "./HomePage";
import { axe, toHaveNoViolations } from "jest-axe";

describe("test the home page", () => {
  it("renders the main content", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    const textElement = screen.getByText(/About CAM API/i);
    expect(textElement).toBeInTheDocument();
  });

  it("renders the what is new box", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    const textElement = screen.getByText(/What's new/i);
    expect(textElement).toBeInTheDocument();
  });
});

expect.extend(toHaveNoViolations);

it("should pass axe accessibility tests", async () => {
  const { container } = render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
