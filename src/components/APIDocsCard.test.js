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

    expect(linkElement).toBeInTheDocument();
  });

  test("renders the Documentation link text", () => {
    render(
      <MemoryRouter>
        <APIDocsCard />
      </MemoryRouter>
    );
    const linkElement = screen.getByRole("link");

    expect(linkElement).toHaveTextContent("Documentation");
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
