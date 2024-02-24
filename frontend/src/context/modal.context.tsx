import { createContext, ReactNode, useMemo, useState } from "react";

interface ModalContextI {
  modalOpen: boolean;
  setModalOpen: (value: boolean) => void;
}

export const ModalContext = createContext<ModalContextI>({
  modalOpen: false,
  setModalOpen: () => undefined,
});

export const ModalContextProvider = ({ children }: { children: ReactNode }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const value = useMemo(
    () => ({
      modalOpen,
      setModalOpen,
    }),
    [modalOpen, setModalOpen]
  );

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
