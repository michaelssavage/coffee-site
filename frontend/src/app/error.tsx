"use client";

import { Button } from "components/Button";
import { Navbar } from "components/Navbar";
import { useEffect } from "react";

interface ErrorI {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorI) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="error-page">
      <Navbar />
      <div className="error-message">
        <h2>Something went wrong!</h2>
        <div>
          <Button onClick={() => reset()} text="Try again" />
        </div>
      </div>
    </div>
  );
}
