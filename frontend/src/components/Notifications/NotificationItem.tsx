import { useCallback, useEffect, useRef } from "react";
import { CrossIcon, TickIcon, WarningTriangle } from "components/Icons";
import type { NotificationI } from "context/notification.context";
import styles from "./Notifications.module.scss";
import { Button } from "components/Button";

const displayDuration = 5000;

const typeMap = {
  success: {
    style: styles.success,
  },
  error: {
    style: styles.error,
  },
};

interface NotificationItemProps {
  notification: NotificationI;
  onRemove: (id: string) => void;
}

export const NotificationItem = ({
  notification,
  onRemove,
}: NotificationItemProps) => {
  const { id, type, title } = notification;
  const { style } = typeMap[type];

  const displayDurationTimeoutId = useRef<number>();

  const onMouseEnter = () => {
    clearTimeout(displayDurationTimeoutId.current);
  };

  const onMouseLeave = () => {
    displayDurationTimeoutId.current = window.setTimeout(
      removeItem,
      displayDuration / 2
    );
  };

  const removeItem = useCallback(() => {
    onRemove(id);
  }, [id, onRemove]);

  useEffect(() => {
    displayDurationTimeoutId.current = window.setTimeout(
      removeItem,
      displayDuration
    );
    return () => clearTimeout(displayDurationTimeoutId.current);
  }, [removeItem]);

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`${style} ${styles.notification}`}
      role="log"
    >
      <div>
        {type === "error" ? (
          <WarningTriangle size="24" color="white" />
        ) : (
          <TickIcon size="24" />
        )}

        <h5 className={styles.title}>{title}</h5>
        <Button
          icon={<CrossIcon size="16" color="#fafffc" />}
          styling={styles.close}
          onClick={removeItem}
        />
      </div>
    </div>
  );
};
