/*
 * Copyright 2022 (c) Jaguar Land Rover Ltd. All rights reserved.
 */

import { describe, expect, it, Mock, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { Button } from "components/Button";

const renderHelper = () => {
  const user = userEvent.setup();
  const onClick = vi.fn();
  render(<Button text="OK" onClick={onClick} />);
  return { onClick, user };
};

describe("Button Component", () => {
  const { getByText, getByRole } = screen;

  it("should correctly render text", () => {
    renderHelper();
    const button = getByRole("button");
    expect(getByText("OK")).toBeDefined();
  });

  it("should evoke 'onClick' when clicked", async () => {
    const { user, onClick } = renderHelper();

    await user.click(getByRole("button"));
    expect(onClick).toHaveBeenCalled();
  });
});
