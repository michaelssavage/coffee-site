import { MouseEvent, ReactElement } from "react";
import styles from "./Button.module.scss";

interface ButtonI {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  icon?: ReactElement;
  text?: string;
  type?: "button" | "submit" | "reset";
  styling?: string;
  disabled?: boolean;
  id?: string;
}

export const Button = ({
  text,
  icon,
  type = "button",
  styling = styles.button,
  disabled = false,
  id,
  onClick,
}: ButtonI) => {
  return (
    <button
      className={styling}
      role="button"
      type={type}
      id={id ? id : `${text}-button`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
      {icon}
    </button>
  );
};
