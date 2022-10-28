import { render, screen, act } from "@testing-library/react";
import Hero from "../../src/components/Hero";
import "@testing-library/jest-dom";

describe("Hero Component", () => {
  it("Renders the HeroMicroBanner", () => {
    render(<Hero />);
    const heroMicroBanner = screen.getByRole("HeroMicroBanner", {
      name: "",
    });
    expect(heroMicroBanner).toBeInTheDocument();
  });
  it("Renders the Robot Image", () => {
    render(<Hero />);
    const robot = screen.getByRole("img", {
      name: "robot",
    });
    expect(robot).toBeInTheDocument();
  });
  it("Renders the Main Heading", () => {
    render(<Hero />);
    const mainTitle1 = screen.getByRole("text", {
      name: "heading1",
    });
    const mainTitle2 = screen.getByRole("text", {
      name: "heading2",
    });
    expect(mainTitle1).toBeInTheDocument();
    expect(mainTitle2).toBeInTheDocument();
  });
  it("Renders the Main Description", () => {
    render(<Hero />);
    const mainDescription = screen.getByRole("text", {
      name: "description",
    });
    expect(mainDescription).toBeInTheDocument();
  });
  it("Renders the 'AddToServer' Button", () => {
    render(<Hero />);
    const AddToServer = screen.getByRole("button", {
      name: "addToServer",
    });
    expect(AddToServer).toBeInTheDocument();
  });
});
