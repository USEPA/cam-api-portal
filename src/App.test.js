import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

test("renders learn react link", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const linkElement = screen.getByText(/CAM-API-Portal Subheader/i);
  expect(linkElement).toBeInTheDocument();
});
