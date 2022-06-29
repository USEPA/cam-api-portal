import React from "react";
import { render, screen } from "@testing-library/react";
import { SubHeader } from "./SubHeader";
import { axe, toHaveNoViolations } from "jest-axe";
import { MemoryRouter } from "react-router-dom";

test("renders the SubHeader page", () => {
  render(
    <MemoryRouter>
      <SubHeader />
    </MemoryRouter>
  );
  expect(screen.getByText(/CAM API/i)).toBeInTheDocument();
});

expect.extend(toHaveNoViolations);

it("should pass axe accessibility tests", async () => {
  const { container } = render(
    <MemoryRouter>
      <SubHeader />
    </MemoryRouter>
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
