import React from "react";
import { CircularProgress } from "@nextui-org/react";

const Loading = () => {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <CircularProgress size="lg" aria-label="Loading..." />
    </main>
  );
};

export default Loading;
