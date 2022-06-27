import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { About } from "./About";
import { axe, toHaveNoViolations } from "jest-axe";

window.open = jest.fn(); // mock window.open for testing the buttons
jest.setTimeout(80000);

describe("Test the About page", () => {
  test("renders the About section", () => {
    render(<About />);

    expect(screen.getByText(/About CAM API/i)).toBeInTheDocument();
  });

  test("renders the CAMPD section", () => {
    render(<About />);

    expect(
      screen.getByText(/Clean Air Markets Program Data/i)
    ).toBeInTheDocument();
  });

  test("renders the ECMPS 2.0 section", () => {
    render(<About />);

    expect(screen.getByText(/ECMPS 2.0 Beta/i)).toBeInTheDocument();
  });

  test("renders the About section to test links and buttons", () => {
    window.open.mockClear();
    const query = render(<About />);

    const { container, getByText } = query;

    expect(screen.getByText("Request an API Key")).toBeTruthy();
    expect(screen.getByText("CAMPD Application")).toBeTruthy();
    expect(screen.getByText("ECMPS 2.0 Application")).toBeTruthy();

    fireEvent.click(getByText("Request an API Key"));
    fireEvent.click(getByText("CAMPD Application"));
    fireEvent.click(getByText("ECMPS 2.0 Application"));

    expect(container.querySelector(".usa-button")).toBeInTheDocument();
  });

  expect.extend(toHaveNoViolations);

  it("should pass axe accessibility tests", async () => {
    const { container } = render(<About />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
