import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { Modal } from "components/Modal";

const renderHelper = () => {
  const user = userEvent.setup();
  const setIsOpen = vi.fn();
  render(
    <Modal isOpen={true} setIsOpen={setIsOpen} title="CREATE NEW">
      <>Content</>
    </Modal>
  );
  return { setIsOpen, user };
};

describe("Modal Component", () => {
  const { getByLabelText, getByRole } = screen;

  it("should display modal and title", () => {
    renderHelper();
    const modalTitle = screen.queryByText("CREATE NEW");
    expect(modalTitle).toBeDefined();
  });

  it("should close when clicking close button", async () => {
    const { user, setIsOpen } = renderHelper();

    const modal = getByRole("button");
    await user.click(modal);
    expect(setIsOpen).toHaveBeenCalledWith(false);
  });

  it("should close when clicking backdrop", async () => {
    const { user, setIsOpen } = renderHelper();

    const backdrop = getByLabelText("Modal Backdrop");
    await user.click(backdrop);
    expect(setIsOpen).toHaveBeenCalledWith(false);
  });

  it("should close when 'escape' key is pressed", async () => {
    const { user, setIsOpen } = renderHelper();

    await user.keyboard("[Escape]");
    expect(setIsOpen).toHaveBeenCalledWith(false);
  });
});
