import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { Banner } from "components/Banner";
import { ModalContextProvider } from "context/modal.context";

const renderHelper = () => {
  const user = userEvent.setup();
  render(
    <ModalContextProvider>
      <Banner />
    </ModalContextProvider>
  );
  return { user };
};

describe("Banner", () => {
  const { findByRole, queryByText, queryByLabelText } = screen;

  it("should display heading", () => {
    renderHelper();
    const bannerHeading = queryByText("Roasted Coffee");
    expect(bannerHeading).toBeDefined();
  });

  it("should display Modal after click", async () => {
    const { user } = renderHelper();
    const button = await findByRole("button", {
      name: "Create your own coffee",
    });
    await user.click(button);
    const backdrop = queryByLabelText("Modal Backdrop");
    expect(backdrop).toBeDefined();
  });
});
