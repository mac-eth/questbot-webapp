import { render, screen } from "@testing-library/react";
import Gamify from "../../src/components/index/Gamify";
import "@testing-library/jest-dom";

describe("Gamify Component", () => {
  it("Renders the Heading", () => {
    render(<Gamify />);
    const text = screen.getByRole("text", {
      name: "heading",
    });
    expect(text).toBeInTheDocument();
  });
  it("Renders the Description", () => {
    render(<Gamify />);
    const text = screen.getByRole("text", {
      name: "description",
    });
    expect(text).toBeInTheDocument();
  });
  it("Renders the Main Image", () => {
    render(<Gamify />);
    const text = screen.getByRole("img", {
      name: "EarnRewards",
    });
    expect(text).toBeInTheDocument();
  });
});