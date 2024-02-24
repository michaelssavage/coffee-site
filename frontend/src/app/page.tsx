"use client";

import { Banner } from "components/Banner";
import { getAllCoffee } from "api/coffee.api";
import { Menu } from "components/Menu";
import { Footer } from "components/Footer";
import { useQuery } from "@tanstack/react-query";
import { Modal } from "components/Modal";
import { Form } from "components/Form";
import { ModalContext } from "context/modal.context";
import { useContext } from "react";

export default function Home() {
  const { data: coffeeItems, refetch } = useQuery({
    queryKey: ["coffee"],
    queryFn: getAllCoffee,
  });

  const { modalOpen, setModalOpen } = useContext(ModalContext);

  return (
    <main>
      <Modal title="CREATE NEW" isOpen={modalOpen} setIsOpen={setModalOpen}>
        <Form refetch={refetch} />
      </Modal>
      <Banner />
      <Menu coffeeItems={coffeeItems} />
      <Footer />
    </main>
  );
}
