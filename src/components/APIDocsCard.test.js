import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { axe, toHaveNoViolations } from "jest-axe";
import { APIDocsCard } from "./APIDocsCard";

describe("Test the API Docs Card", () => {
  test("renders the card header text", () => {
    render(<APIDocsCard />);
    const linkElement = screen.getByText(/API Documentation/i);

    expect(linkElement).toBeInTheDocument();
  });

  test("renders the Documentation link text", () => {
    render(<APIDocsCard />);
    const APIdocParagraphElement = screen.getByRole("link");

    expect(APIdocParagraphElement).toHaveTextContent("Documentation");
  });
});

expect.extend(toHaveNoViolations);

it("should pass axe accessibility tests", async () => {
  const { container } = render(<APIDocsCard />);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
