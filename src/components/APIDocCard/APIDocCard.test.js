import React from "react";
import { getByText, render, waitFor, screen } from "@testing-library/react";
import { APIDocCard } from "./APIDocCard";
import { axe, toHaveNoViolations } from "jest-axe";
import { MemoryRouter } from "react-router-dom";
import { CardGroup } from "@trussworks/react-uswds";

window.open = jest.fn(); // mock window.open for testing the card
jest.setTimeout(30000);

describe("test the APIDocs page", () => {
  it("renders the main content", async () => {
    window.open.mockClear();
    render(
      <MemoryRouter>
        <CardGroup>
          <APIDocCard
            page={{
              title: "Beta",
              name: "test",
              description: "read",
              tags: ["ECMPS"],
            }}
            index={1}
          />
        </CardGroup>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("Beta")).toBeInTheDocument();
    });
  });

  expect.extend(toHaveNoViolations);

  test("should pass axe accessibility tests", async () => {
    const { container } = render(
      <MemoryRouter>
        <CardGroup>
          <APIDocCard
            page={{
              title: "Beta",
              name: "test",
              description: "read",
              tags: ["ECMPS"],
            }}
            index={1}
          />
        </CardGroup>
      </MemoryRouter>
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
