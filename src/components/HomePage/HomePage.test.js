import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { HomePage } from "./HomePage";
//import { axe, toHaveNoViolations } from "jest-axe";
import { MemoryRouter } from "react-router-dom";

jest.setTimeout(100000);

test("renders the home page", () => {
  render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  );
  expect(screen.getByText(/About CAM API/i)).toBeInTheDocument();
});

// Accessibility testing the entire homepage with all componenets takes a large
// amount of time and requires an increasing amount of time added to the jest.
// setTimeout(). Instead, we will test individual components and use Lighthouse
// in Chrome to do manual testing of pages composed of multiple components.

// expect.extend(toHaveNoViolations);

// test("should pass axe accessibility tests", async () => {
//   const { container } = render(
//     <MemoryRouter>
//       <HomePage />
//     </MemoryRouter>
//   );
//   const results = await axe(container);

//   expect(results).toHaveNoViolations();
// });
