import { Button } from "components/Button";
import styles from "./Form.module.scss";

interface SelectProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export const Select = (props: SelectProps) => {
  const { value, label, onChange } = props;

  return (
    <>
      <label htmlFor={`${label}-input`}>{label}</label>
      <div className={styles.coffeeTypeGroup}>
        <Button
          text="Arabic"
          id={`${label}-input`}
          onClick={() => {
            onChange("Arabic");
          }}
          styling={
            value === "Arabic" ? styles.activeButton : styles.inputButton
          }
        />
        <Button
          text="Robusta"
          id={`${label}-input`}
          onClick={() => {
            onChange("Robusta");
          }}
          styling={
            value === "Robusta" ? styles.activeButton : styles.inputButton
          }
        />
      </div>
    </>
  );
};
