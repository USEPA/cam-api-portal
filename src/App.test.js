import { render, screen } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";
import { HomePage } from "./components/HomePage/HomePage";

jest.mock("./components/HomePage/HomePage");

describe("test the router function", () => {
  it("returns a 404 when a bad page is requested", () => {
    render(
      <MemoryRouter initialEntries={["/not-found"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/Not Found/i)).toBeInTheDocument();
  });

  it("returns the home page when the home page is requested", () => {
    HomePage.mockImplementation(() => <div>Home Page</div>);

    render(
      <MemoryRouter initialEntries={["/home"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/Home Page/i)).toBeInTheDocument();
  });
});
