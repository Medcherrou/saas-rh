import { render, screen } from "@testing-library/react";
import Home from "../src/app/page";

describe("Home Page", () => {
  it("renders the getting started instruction", () => {
    render(<Home />);
    expect(screen.getByText(/Get started by editing/i)).toBeInTheDocument();
  });

  it("renders the deploy button", () => {
    render(<Home />);
    expect(
      screen.getByRole("link", { name: /Deploy now/i })
    ).toBeInTheDocument();
  });

  it("renders the docs link", () => {
    render(<Home />);
    expect(
      screen.getByRole("link", { name: /Read our docs/i })
    ).toBeInTheDocument();
  });
});
