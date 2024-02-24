import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Navbar } from "components/Navbar";

const renderHelper = () => {
  render(<Navbar />);
};

describe("Navbar", () => {
  const { findByLabelText, queryByText } = screen;

  it("should have the MVST title", () => {
    renderHelper();
    const title = queryByText("MVST coffee");
    expect(title).toBeDefined();
  });

  it("should have a link in the nav", async () => {
    renderHelper();
    const link = await findByLabelText("title-link");
    expect(link.getAttribute("href")).toBe("/");
  });
});
