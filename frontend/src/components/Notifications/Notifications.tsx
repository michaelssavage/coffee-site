"use client";

import { createPortal } from "react-dom";
import { useNotification } from "hooks/use-notification.hook";
import styles from "./Notifications.module.scss";
import { NotificationItem } from "./NotificationItem";
import { useEffect, useState } from "react";

export const Notifications = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const { notifications, remove } = useNotification();
  return mounted
    ? createPortal(
        <div className={styles.container}>
          {notifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              notification={notification}
              onRemove={remove}
            />
          ))}
        </div>,
        document.body
      )
    : null;
};
