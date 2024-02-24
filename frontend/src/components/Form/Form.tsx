import styles from "./Form.module.scss";
import { Button } from "components/Button";
import { ModalContext } from "context/modal.context";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { TextInput } from "./TextInput";
import { NumberInput } from "./NumberInput";
import { Select } from "./Select";
import { useForm } from "hooks/useForm.hook";
import { Coffee } from "types/Coffee";
import { createCoffee } from "api/coffee.api";
import { Spinner } from "components/Spinner";
import { useNotification } from "hooks/use-notification.hook";
import { useMutation, useQuery } from "@tanstack/react-query";

const defaultValues: Coffee = {
  name: "",
  price: 1,
  type: "Arabic",
  description: "",
  imageUrl: "",
};

interface FormI {
  refetch: () => void;
}

export const Form = ({ refetch }: FormI) => {
  const { setModalOpen } = useContext(ModalContext);
  const [isLoading, setIsLoading] = useState(false);
  const { notify } = useNotification();

  const { onChange, onSubmit, validate, formValues, errors } =
    useForm(defaultValues);

  const { mutate } = useMutation({
    mutationFn: createCoffee,
    onSuccess: () => {
      notify({
        type: "success",
        title: "A new hot coffee is ready at MVST",
      });
      setModalOpen(false);
      refetch();
    },
    onError: (err) => {
      if (err.message === "Conflict") {
        notify({
          type: "error",
          title: "A coffee with the same name already exists",
        });
      } else {
        notify({
          type: "error",
          title: "An error occurred creating a new coffee",
        });
      }
      setModalOpen(false);
    },
  });

  useEffect(() => {
    validate();
  }, [formValues, validate]);

  const handleSubmit = async (values: Coffee) => {
    setIsLoading(true);
    mutate(values);
    setIsLoading(false);
  };

  return (
    <form className={styles.formContainer} onSubmit={onSubmit(handleSubmit)}>
      <div className={styles.coffeeBeans}>
        <Image src="/beans.png" width={150} height={200} alt="coffee beans" />
      </div>
      <div className={styles.firstRowGroup}>
        <div className={styles.flexNameContainer}>
          <TextInput
            label="Name"
            placeholder="Name your coffee here"
            value={formValues.name}
            onChange={onChange("name")}
            error={errors.name}
          />
        </div>

        <div className={styles.flexPriceContainer}>
          <NumberInput
            label="Price"
            placeholder="0.00"
            value={formValues.price}
            onChange={onChange("price")}
            error={errors.price}
          />
        </div>
      </div>

      <div className={styles.inputContainer}>
        <Select
          value={formValues.type}
          onChange={onChange("type")}
          label="Type"
        />
      </div>

      <div className={styles.inputContainer}>
        <TextInput
          label="Upload image"
          id="url"
          placeholder="Paste image URL here"
          value={formValues.imageUrl}
          onChange={onChange("imageUrl")}
          error={errors.imageUrl}
        />
      </div>

      <div className={styles.inputContainer}>
        <TextInput
          label="Description"
          placeholder="Add a description"
          value={formValues.description}
          onChange={onChange("description")}
          error={errors.description}
        />
      </div>

      <div className={styles.buttonGroup}>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <Button
              styling={styles.invertedButton}
              text="Discard"
              onClick={() => setModalOpen(false)}
            />
            <Button text="Confirm" type="submit" />
          </>
        )}
      </div>
    </form>
  );
};
