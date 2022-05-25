import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { HelpResources } from "./HelpResources";
import { axe, toHaveNoViolations } from "jest-axe";

jest.setTimeout(30000);

describe("test the Help & Resources page", () => {
  it("renders the main content", () => {
    render(
      <MemoryRouter>
        <HelpResources />
      </MemoryRouter>
    );
    const textElement = screen.getByText(/provide a large amount/i);
    expect(textElement).toBeInTheDocument();
  });
});

expect.extend(toHaveNoViolations);

it("should pass axe accessibility tests", async () => {
  const { container } = render(
    <MemoryRouter>
      <HelpResources />
    </MemoryRouter>
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
