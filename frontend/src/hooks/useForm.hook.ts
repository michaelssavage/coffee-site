import { FormEvent, useCallback, useState } from "react";
import { Coffee } from "types/Coffee";
import { ValueOf } from "types/utils";
import { isValidUrl } from "utils/isValidUrl";
import { Paths } from "utils/paths";

interface Validation {
  isUrl?: boolean;
  isNum?: boolean;
  min?: number;
  max?: number;
}
type Validations = Partial<Record<ValueOf<Coffee>, Validation>>;
type Errors = Partial<Record<Paths<Coffee>, string>>;

const validations: Validations = {
  name: { min: 2, max: 100 },
  imageUrl: { max: 300, isUrl: true },
  price: { isNum: true },
  description: { min: 10, max: 200 },
};

export const useForm = (defaultValues: Coffee) => {
  const [formValues, setFormValues] = useState<Coffee>(defaultValues);
  const [errors, setErrors] = useState<Errors>(() => ({}));

  const validateField = (value: unknown, validation: Validation) => {
    const { isNum, isUrl, min, max } = validation;

    if (value === undefined || (typeof value === "string" && value == "")) {
      return "This field is required";
    }

    if (
      isNum &&
      typeof value === "string" &&
      (!parseInt(value) || parseInt(value) <= 0)
    ) {
      return "Must be a number";
    }

    if (isUrl && !isValidUrl(value)) {
      return "Must be a valid URL";
    }

    if (
      min &&
      typeof value === "string" &&
      value.length < min &&
      value.length > 0
    )
      return `Must be at least ${min} characters`;

    if (max && typeof value === "string" && value.length > max)
      return `Must not be larger that ${max} characters`;

    return "";
  };

  const onChange = useCallback((key: Paths<Coffee>) => {
    return (newValue: ValueOf<Coffee>) => {
      const validation = validations?.[key as Paths<Coffee>];
      if (validation) {
        const validationResult = validateField(newValue, validation);
        setErrors((oldErrors) => ({
          ...oldErrors,
          ...{ [key]: validationResult },
        }));
      }
      setFormValues((oldFormValues) => ({
        ...oldFormValues,
        [key]: newValue,
      }));
    };
  }, []);

  const validate = useCallback(() => {
    let checkIfValid = true;
    for (const key in validations) {
      const validation = validations?.[key as Paths<Coffee>];
      if (!validation) continue;
      const value = formValues[key as Paths<Coffee>];
      const validationResult = validateField(value, validation);
      if (validationResult) {
        checkIfValid = false;
        setErrors((oldErrors) => ({
          ...oldErrors,
          ...{ [key]: validationResult },
        }));
      }
    }
    return checkIfValid;
  }, [formValues]);

  const onSubmit = useCallback(
    (callback: (_formValues: Coffee) => void) => {
      return (e: FormEvent) => {
        e.preventDefault();
        if (validate()) callback(formValues);
      };
    },
    [formValues, validate]
  );

  return {
    onChange,
    onSubmit,
    validate,
    formValues,
    errors,
  };
};
