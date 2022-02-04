import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { About } from "./About";

describe("Test the About page", () => {
  test("renders the About section", () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );

    const linkElement = screen.getByText(/About CAM API/i);
    expect(linkElement).toBeInTheDocument();

    const btns = screen.getAllByText("Request an API Key");
    expect(btns).toBeDefined();
  });

  test("renders the CAMDP section", () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );

    const linkElement = screen.getByText(/Clean Air Markets Program Data/i);
    expect(linkElement).toBeInTheDocument();

    const btns = screen.getAllByText("CAMPD Application");
    expect(btns).toBeDefined();
  });

  test("renders the ECMPS 2.0 section", () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );

    const linkElement = screen.getByText(/ECMPS 2.0 Beta/i);
    expect(linkElement).toBeInTheDocument();

    const btns = screen.getAllByText("ECMPS 2.0 Application");
    expect(btns).toBeDefined();
  });
});
