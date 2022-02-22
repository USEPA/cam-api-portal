import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { APIKeyModal } from "./APIKeyModal";
import { axe, toHaveNoViolations } from "jest-axe";
window.open = jest.fn(); // mock window.open for testing the buttons

describe("Test the API key request modal", () => {
  test("renders the API key request modal to test...", () => {
    window.open.mockClear();
    const query = render(<APIKeyModal />);

    const { container, getByText } = query;
    const apikey = screen.getByText("Request an API Key");
    expect(apikey).toBeTruthy();
    fireEvent.click(getByText("Request an API Key"));
    expect(container.querySelector(".usa-button")).toBeInTheDocument();
  });

  expect.extend(toHaveNoViolations);

  it("should pass axe accessibility tests", async () => {
    const { container } = render(<APIKeyModal />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
