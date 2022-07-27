import React from "react";
import { render, screen } from "@testing-library/react";
import { FAQ } from "./FAQ";
import { axe, toHaveNoViolations } from "jest-axe";

jest.setTimeout(30000);

describe("test the FAQ page", () => {
  it("renders the main content", () => {
    render(<FAQ />);

    screen.getByText((content, node) => {
      const hasText = (node) =>
        node.textContent === "Frequently Asked Questions";
      const nodeHasText = hasText(node);
      const childrenDontHaveText = Array.from(node.children).every(
        (child) => !hasText(child)
      );

      return nodeHasText && childrenDontHaveText;
    });
  });
});

expect.extend(toHaveNoViolations);

it("should pass axe accessibility tests", async () => {
  const { container } = render(<FAQ />);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
