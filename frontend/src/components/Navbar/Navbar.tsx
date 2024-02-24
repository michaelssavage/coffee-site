"use client";

import { Button } from "components/Button";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { ModalContext } from "context/modal.context";

export const Navbar = () => {
  const { setModalOpen } = useContext(ModalContext);

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 120) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  return (
    <div className={`${styles.navbar} ${scrolling ? styles.scroll : ""}`}>
      <div className={styles.navItems}>
        <Link href="/" aria-label="title-link">
          <h1>
            MVST <span className="poppins">Coffee</span>
          </h1>
        </Link>
        <Button text="create" onClick={() => setModalOpen(true)} />
      </div>
    </div>
  );
};
