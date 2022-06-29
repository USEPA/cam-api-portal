import React from "react";
import { render } from "@testing-library/react";
import { Layout } from "./Layout";
import { axe, toHaveNoViolations } from "jest-axe";
import { MemoryRouter } from "react-router-dom";

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
