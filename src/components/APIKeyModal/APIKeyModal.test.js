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
    const genAPI = screen.getByText(/Generate an API/i);
    expect(genAPI).toBeInTheDocument();
    const signUp = screen.getByText(/Sign up for an application/i);
    expect(signUp).toBeInTheDocument();
    const reqField = screen.getByText(/Required fields/i);
    expect(reqField).toBeInTheDocument();
    const firstName = screen.getByText(/First name/i);
    expect(firstName).toBeInTheDocument();
    const lastName = screen.getByText(/Last name/i);
    expect(lastName).toBeInTheDocument();
    const email = screen.getByText(/Email address/i);
    expect(email).toBeInTheDocument();
    const APIuse = screen.getByText(/How will you use the APIs/i);
    expect(APIuse).toBeInTheDocument();
  });

  expect.extend(toHaveNoViolations);

  it("should pass axe accessibility tests", async () => {
    const { container } = render(<APIKeyModal />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
