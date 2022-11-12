import { render, screen } from "@testing-library/react";
import Stats from "../../src/components/index/Stats";
import "@testing-library/jest-dom";

describe("Stats Component", () => {
  it("Renders the Active Users", () => {
    render(<Stats />);
    const stats = screen.getByRole("stats", {
      name: "stats-1",
    });
    expect(stats).toBeInTheDocument();
  });
  it("Renders the Active Servers", () => {
    render(<Stats />);
    const stats = screen.getByRole("stats", {
      name: "stats-2",
    });
    expect(stats).toBeInTheDocument();
  });
  it("Renders the Gold Distributed", () => {
    render(<Stats />);
    const stats = screen.getByRole("stats", {
      name: "stats-3",
    });
    expect(stats).toBeInTheDocument();
  });
});
