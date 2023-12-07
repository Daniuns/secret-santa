import Groups from "@/app/ui/Groups";
import React from "react";

interface Props {}

const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Groups />
    </main>
  );
};

export default page;
