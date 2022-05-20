import React from "react";
import { render, screen } from "@testing-library/react";
import { UpdateBanner } from "./UpdateBanner";

it("should render the Alert banner", () => {
  render(<UpdateBanner />);
  expect(screen.getByText(/Informative status/i)).toBeInTheDocument();
});
