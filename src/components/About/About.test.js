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

    const linkElement = screen.getByText(
      /About CAM API/i &&
        /These REST APIs provide access to a variety of data the Clean Air Markets Division \(CAMD\) collects to run programs designed to reduce air pollution from power plants. Developers can use these APIs to build applications or create analyses using a variety of platforms./i
    );
    expect(linkElement).toBeInTheDocument();

    const btns = screen.getAllByText("Request an API Key");
    expect(btns).toBeDefined();
  });

  test("renders the CAMPD section", () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );

    const linkElement = screen.getByText(
      /Clean Air Markets Program Data/i &&
        /The Clean Air Markets Program Data \(CAMPD\) web application is the data publication warehouse for allowance, compliance, emissions and facility\/unit attributes data collected under EPA’s federal market-based trading programs./i
    );
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

    const linkElement = screen.getByText(
      /ECMPS 2.0 Beta/i &&
        /The Emissions Collection and Monitoring Plan System 2.0 Beta is the new web-based reporting tool released in beta form to allow industry users and the public to begin testing and learning the new application. Data in the beta is not production data and is only being used for testing purposes./i
    );
    expect(linkElement).toBeInTheDocument();

    const btns = screen.getAllByText("ECMPS 2.0 Application");
    expect(btns).toBeDefined();
  });
});
