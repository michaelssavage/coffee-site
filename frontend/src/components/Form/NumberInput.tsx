import styles from "./Form.module.scss";

interface NumberInputProps {
  label: string;
  value: number;
  placeholder: string;
  onChange: (value: string) => void;
  error?: string;
}

export const NumberInput = (props: NumberInputProps) => {
  const { value, label, placeholder, onChange, error } = props;

  return (
    <>
      <label htmlFor={`${label}-input`}>{label}</label>
      <div className={styles.currencyWrap}>
        <span>€</span>
        <input
          className={styles.numberBox}
          type="string"
          id={`${label}-input`}
          placeholder={placeholder}
          value={value}
          onChange={({ target }) => {
            onChange(target.value);
          }}
        />
        {error && <div className="error-text">{error}</div>}
      </div>
    </>
  );
};
