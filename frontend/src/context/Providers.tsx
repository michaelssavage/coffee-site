"use client";

import { ReactNode } from "react";
import { ModalContextProvider } from "./modal.context";
import { NotificationContextProvider } from "./notification.context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export function Providers({ children }: { children: ReactNode }) {
  const queryClient = new QueryClient();

  return (
    <NotificationContextProvider>
      <QueryClientProvider client={queryClient}>
        <ModalContextProvider>{children}</ModalContextProvider>
      </QueryClientProvider>
    </NotificationContextProvider>
  );
}
