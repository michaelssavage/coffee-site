"use client";

import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";
import { CrossIcon } from "components/Icons";
import styles from "./Modal.module.scss";
import { Button } from "components/Button";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
  title: string;
  children: ReactNode;
}

export const Modal = (props: ModalProps) => {
  const { isOpen, setIsOpen, title, children } = props;

  const [mounted, setMounted] = useState(false);
  const backdrop = useRef(null);
  const container = useRef(null);
  const backdropMouseDown = useRef(false);
  const onKeydown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    },
    [setIsOpen]
  );

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    document.addEventListener("keydown", onKeydown, false);
    return () => document.removeEventListener("keydown", onKeydown, false);
  }, [onKeydown]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return mounted
    ? createPortal(
        <CSSTransition
          classNames="fade"
          nodeRef={backdrop}
          in={isOpen}
          timeout={250}
          unmountOnExit
        >
          <div
            ref={backdrop}
            onMouseDown={(e) => {
              if (e.target === backdrop.current)
                backdropMouseDown.current = true;
              else backdropMouseDown.current = false;
            }}
            onMouseUp={(e) => {
              if (e.target === backdrop.current && backdropMouseDown.current)
                setIsOpen(false);
            }}
            className={styles.root}
            aria-label="Modal Backdrop"
          >
            <CSSTransition
              classNames="apear"
              nodeRef={container}
              in={isOpen}
              timeout={250}
              unmountOnExit
            >
              <div className={styles.container} ref={container} role="dialog">
                <Button
                  icon={<CrossIcon color="#fafffc" />}
                  styling={styles.close}
                  onClick={() => setIsOpen(false)}
                />
                <h3 className={styles.title}>{title}</h3>
                <div>{children}</div>
              </div>
            </CSSTransition>
          </div>
        </CSSTransition>,
        document.body
      )
    : null;
};
