import { render, screen } from "@testing-library/react";
import EarnRewards from "../../src/components/EarnRewards";
import "@testing-library/jest-dom";

describe("EarnRewards Component", () => {
  it("Renders the Heading", () => {
    render(<EarnRewards />);
    const text = screen.getByRole("text", {
      name: "heading",
    });
    expect(text).toBeInTheDocument();
  });
  it("Renders the Description", () => {
    render(<EarnRewards />);
    const text = screen.getByRole("text", {
      name: "description",
    });
    expect(text).toBeInTheDocument();
  });
  it("Renders the Main Image", () => {
    render(<EarnRewards />);
    const text = screen.getByRole("img", {
      name: "bill",
    });
    expect(text).toBeInTheDocument();
  });
});
