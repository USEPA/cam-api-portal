import React from "react";
import { render, screen } from "@testing-library/react";
import { APIDocs } from "./APIDocs";

jest.setTimeout(30000);

describe("test the APIDocs page", () => {
  it("renders the main content", () => {
    render(<APIDocs />);
    const textElement = screen.getByText(/APIDocs/i);
    expect(textElement).toBeInTheDocument();
  });
});
