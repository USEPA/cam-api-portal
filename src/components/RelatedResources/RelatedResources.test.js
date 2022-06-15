import React from "react";
import { render, screen } from "@testing-library/react";
import { RelatedResources } from "./RelatedResources";
import { axe, toHaveNoViolations } from "jest-axe";

jest.setTimeout(30000);

describe("test the Related Resources page", () => {
  it("renders the main content", () => {
    render(<RelatedResources />);

    screen.getByText((content, node) => {
      const hasText = (node) => node.textContent === "Related Resources";
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
  const { container } = render(<RelatedResources />);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
