import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { HelpResources } from "./HelpResources";
import { axe, toHaveNoViolations } from "jest-axe";

jest.setTimeout(30000);

describe("test the Help & Resources page", () => {
  it("renders the main content", () => {
    render(<HelpResources />);
    const textElement = screen.getByText(/Help & Resources sections/i);
    expect(textElement).toBeInTheDocument();
  });
});
