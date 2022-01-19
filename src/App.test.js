import { render, screen } from '@testing-library/react';
import App from './App';
const { axe, toHaveNoViolations } = require("jest-axe");


test('renders hello CAM-API-Portal text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello CAM-API-Portal/i);
  expect(linkElement).toBeInTheDocument();
});


expect.extend(toHaveNoViolations);

it("should pass axe accessibility tests", async () => {
    const { container } = render(<App />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
});