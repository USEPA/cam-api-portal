import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { APIDocs } from "./APIDocs";
import { axe, toHaveNoViolations } from "jest-axe";

jest.setTimeout(30000);

describe("test the APIDocs page", () => {
  it("renders the main content", () => {
    render(
      <MemoryRouter>
        <APIDocs />
      </MemoryRouter>
    );
    const textElement = screen.getByText(/APIDocs/i);
    expect(textElement).toBeInTheDocument();
  });
});
