import styles from "./Form.module.scss";

interface TextInputProps {
  label: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  id?: string;
  error?: string;
  inputStyle?: string;
}

export const TextInput = (props: TextInputProps) => {
  const {
    value,
    label,
    placeholder,
    onChange,
    id,
    error,
    inputStyle = styles.inputBox,
  } = props;

  const labelId = id ? id : label;

  return (
    <>
      <label htmlFor={`${labelId}-input`}>{label}</label>
      <input
        className={inputStyle}
        type="text"
        id={`${labelId}-input`}
        placeholder={placeholder}
        value={value}
        onChange={({ target }) => {
          onChange(target.value);
        }}
      />
      {error && <div className="error-text">{error}</div>}
    </>
  );
};
