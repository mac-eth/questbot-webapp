import { render, screen } from "@testing-library/react";
import Clients from "../../src/components/index/Clients";
import "@testing-library/jest-dom";

describe("Clients Component", () => {
  it("Renders the Clients", () => {
    render(<Clients />);
    const logo = screen.getByRole("img", {
      name: "client-1",
    });
    expect(logo).toBeInTheDocument();
  });
  it("Renders the Clients", () => {
    render(<Clients />);
    const logo = screen.getByRole("img", {
      name: "client-2",
    });
    expect(logo).toBeInTheDocument();
  });
});