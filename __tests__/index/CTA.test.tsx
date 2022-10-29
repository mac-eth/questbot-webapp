import { render, screen } from "@testing-library/react";
import CTA from "../../src/components/CTA";
import "@testing-library/jest-dom";

describe("CTA Component", () => {
  it("Renders the Heading", () => {
    render(<CTA />);
    const heading = screen.getByRole("text", {
      name: "heading",
    });
    expect(heading).toBeInTheDocument();
  });
  it("Renders the Description", () => {
    render(<CTA />);
    const description = screen.getByRole("text", {
      name: "description",
    });
    expect(description).toBeInTheDocument();
  });
  it("Renders the 'Get Started' Button", () => {
    render(<CTA />);
    const button = screen.getByRole("button", {
      name: "GetStarted",
    });
    expect(button).toBeInTheDocument();
  });
  it("Renders the Background", () => {
    render(<CTA />);
    const background = screen.getByRole("background", {
      name: "",
    });
    expect(background).toBeInTheDocument();
  });
});