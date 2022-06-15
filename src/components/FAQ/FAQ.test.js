import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { FAQ } from "./FAQ";
import { axe, toHaveNoViolations } from "jest-axe";

jest.setTimeout(30000);

describe("test the FAQ page", () => {
  it("renders the main content", () => {
    render(
      <MemoryRouter>
        <FAQ />
      </MemoryRouter>
    );
    const textElement = screen.getByText(/ questions /i);
    expect(textElement).toBeInTheDocument();
  });
});

expect.extend(toHaveNoViolations);

it("should pass axe accessibility tests", async () => {
  const { container } = render(
    <MemoryRouter>
      <FAQ />
    </MemoryRouter>
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
