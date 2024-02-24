import {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";
import { randomID } from "utils/randomID";

export interface NotificationI {
  id: string;
  type: "success" | "error";
  title: string;
}

type CreateNotification = Pick<NotificationI, "type" | "title">;

interface NotificationContextI {
  notifications: NotificationI[];
  notify: (data: CreateNotification) => void;
  remove: (id: string) => void;
}

export const NotificationContext = createContext<NotificationContextI>({
  notifications: [],
  notify: () => undefined,
  remove: () => undefined,
});

interface NotificationProviderProps {
  children: ReactNode;
}

export const NotificationContextProvider = ({
  children,
}: NotificationProviderProps) => {
  const [notifications, setNotifications] = useState<NotificationI[]>([]);

  const notify = useCallback((notification: CreateNotification) => {
    const newNotification = { ...notification, id: randomID() };
    setNotifications((oldNotifications) => [
      ...oldNotifications,
      newNotification,
    ]);
  }, []);

  const remove = useCallback((id: string) => {
    setNotifications((oldNotifications) =>
      oldNotifications.filter((item) => item.id !== id)
    );
  }, []);

  const value = useMemo(
    () => ({ notifications, notify, remove }),
    [notifications, notify, remove]
  );

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};
