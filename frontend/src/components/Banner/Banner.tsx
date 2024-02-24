"use client";

import { Button } from "components/Button";
import styles from "./Banner.module.scss";
import { useContext } from "react";
import { ModalContext } from "context/modal.context";

export const Banner = () => {
  const { setModalOpen } = useContext(ModalContext);

  return (
    <div className={styles.banner}>
      <div className={styles.bannerText}>
        <h1>Roasted Coffee</h1>
        <p>Choose a coffee from below or create your own.</p>
        <Button
          text="Create your own coffee"
          onClick={() => setModalOpen(true)}
        />
      </div>
    </div>
  );
};
