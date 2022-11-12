import { render, screen } from "@testing-library/react";
import Business from "../../src/components/index/Business";
import "@testing-library/jest-dom";

describe("Business Component", () => {
  it("Renders the Heading", () => {
    render(<Business />);
    const text = screen.getByRole("text", {
      name: "heading",
    });
    expect(text).toBeInTheDocument();
  });
  it("Renders the Description", () => {
    render(<Business />);
    const text = screen.getByRole("text", {
      name: "description",
    });
    expect(text).toBeInTheDocument();
  });
  it("Renders the 'Reward' Features", () => {
    render(<Business />);
    const text = screen.getByRole("features", {
      name: "feature-1",
    });
    expect(text).toBeInTheDocument();
  });
  it("Renders the 'Built in Security' Features", () => {
    render(<Business />);
    const text = screen.getByRole("features", {
      name: "feature-2",
    });
    expect(text).toBeInTheDocument();
  });
  it("Renders the 'Gamifying Your Community' Features", () => {
    render(<Business />);
    const text = screen.getByRole("features", {
      name: "feature-3",
    });
    expect(text).toBeInTheDocument();
  });
});