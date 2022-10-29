import { render, screen } from "@testing-library/react";
import Renderer from 'react-test-renderer';
import Footer from "../../src/components/Footer";
import "@testing-library/jest-dom";
import { footerLinks } from "../../src/constants";

describe("Footer Component", () => {
  it("Renders the Footer Logo", () => {
    render(<Footer />);
    const logo = screen.getByRole("img", {
      name: "questbot_logo",
    });
    expect(logo).toBeInTheDocument();
  });
  it("Renders the Footer Description", () => {
    render(<Footer />);
    const text = screen.getByRole("text", {
      name: "description",
    });
    expect(text).toBeInTheDocument();
  });
  it("Renders the Footer Copyright", () => {
    render(<Footer />);
    const text = screen.getByRole("text", {
      name: "copyright",
    });
    expect(text).toBeInTheDocument();
  });
  it("Renders the Footer Link Titles", () => {
    render(<Footer />);
    for (var i = 0; i < footerLinks.length; i++) {
      const text = screen.getByRole("heading", {
        name: `${footerLinks[i].title}`,
      });
      expect(text).toBeInTheDocument();
    }
  });
  it("Renders the Footer Links", () => {
    render(<Footer />);
    for (var i = 0; i < footerLinks.length; i++) {
      for (var j = 0; j < footerLinks[i].links.length; j++) {
        const text = screen.getByRole("listitem", {
          name: `${footerLinks[i].links[j].name}`,
        });
        expect(text).toBeInTheDocument();
      }
    }
  });
  it("Renders the entire Footerw", () => {
    const renderer = Renderer.create(
      <Footer />
    );
    expect(renderer.toJSON()).toMatchSnapshot();
  });
});
