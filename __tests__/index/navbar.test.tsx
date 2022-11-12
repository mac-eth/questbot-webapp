import { render, screen } from "@testing-library/react";
import Renderer from "react-test-renderer";
import Navbar from "../../src/components/layout/Navbar";
import "@testing-library/jest-dom";
import { SessionProvider } from "next-auth/react";

describe("Navbar Component", () => {
  test.skip("Renders the Navbar Logo", () => {
    render(
      <SessionProvider>
        <Navbar />
      </SessionProvider>
    );
    const logo = screen.getByRole("img", {
      name: "questbot_logo",
    });
    expect(logo).toBeInTheDocument();
  });
  it("Renders the entire Navbar", () => {
    const renderer = Renderer.create(
      <SessionProvider>
        <Navbar />
      </SessionProvider>
    );
    expect(renderer.toJSON()).toMatchSnapshot();
  });
});
