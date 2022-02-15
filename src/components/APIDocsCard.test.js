import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { axe, toHaveNoViolations } from "jest-axe";
import { APIDocsCard } from "./APIDocsCard";

describe("Test the API Docs Card", () => {
  test("renders the card header text", () => {
    render(
      <MemoryRouter>
        <APIDocsCard />
      </MemoryRouter>
    );
    const linkElement = screen.getByText(
      /API Documentation/i &&
        /Lorem ipsum dolor sit amet, consectetur adipiscing elit./i
    );
    //Documentation link test
    expect(linkElement).toBeInTheDocument();
  });
});

expect.extend(toHaveNoViolations);

it("should pass axe accessibility tests", async () => {
  const { container } = render(
    <MemoryRouter>
      <APIDocsCard />
    </MemoryRouter>
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
