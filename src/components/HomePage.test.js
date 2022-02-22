import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { HomePage } from "./HomePage";
import { axe, toHaveNoViolations } from "jest-axe";

jest.setTimeout(30000);

describe("test the home page", () => {
  it("renders the main content", () => {
    render(<HomePage />);
    const textElement = screen.getByText(/About CAM API/i);
    expect(textElement).toBeInTheDocument();
  });

  expect.extend(toHaveNoViolations);

  it("should pass axe accessibility tests", async () => {
    const { container } = render(<HomePage />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
