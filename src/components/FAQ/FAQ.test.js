import React from "react";
import { render, screen } from "@testing-library/react";
import { FAQ } from "./FAQ";
import { axe, toHaveNoViolations } from "jest-axe";

jest.setTimeout(30000);

const mockState = jest.fn();
const md = { md: "## Frequently Asked Questions" };
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  // prevent the use of fetch in a test
  useEffect: (f) => jest.fn(),
  // add mock content since we aren't pulling in the md file
  useState: (initial) => [md, mockState],
}));

describe("test the FAQ page", () => {
  it("renders the main content", () => {
    render(<FAQ />);

    expect(screen.getByText("Frequently Asked Questions")).toBeInTheDocument();
  });
});
expect.extend(toHaveNoViolations);

it("should pass axe accessibility tests", async () => {
  const { container } = render(<FAQ />);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
