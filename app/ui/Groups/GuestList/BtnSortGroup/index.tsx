"use client";

import { Button } from "@nextui-org/react";
import React from "react";
import { useFormStatus } from "react-dom";

const BtnSortGroup = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending}
      className="self-end"
      color="primary"
      type="submit"
    >
      {!pending ? "Sortear" : "Sorteando..."}
    </Button>
  );
};

export default BtnSortGroup;
