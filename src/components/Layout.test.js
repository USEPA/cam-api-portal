import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Layout } from "./Layout";
import { axe, toHaveNoViolations } from "jest-axe";

test.todo("render the subheader for the CAM API pages");
//, () => {
//   render(
//     <MemoryRouter>
//       <Layout />
//     </MemoryRouter>
//   );

//   const linkElement = screen.getByText(/CAM-API-Portal Subheader/i);
//   expect(linkElement).toBeInTheDocument();
//});

expect.extend(toHaveNoViolations);

it("should pass axe accessibility tests", async () => {
  const { container } = render(
    <MemoryRouter>
      <Layout />
    </MemoryRouter>
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
