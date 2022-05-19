import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { axe, toHaveNoViolations } from "jest-axe";
import { ReleaseNotes } from "./ReleaseNotes";

jest.setTimeout(30000);

describe("test the Release Notes page", () => {
  it("renders the main content", () => {
    render(
      <MemoryRouter>
        <ReleaseNotes />
      </MemoryRouter>
    );
    const textElement = screen.getByText(/Release Notes/i);
    expect(textElement).toBeInTheDocument();
  });

  expect.extend(toHaveNoViolations);

  test("should pass axe accessibility tests", async () => {
    const { container } = render(
      <MemoryRouter>
        <ReleaseNotes />
      </MemoryRouter>
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
