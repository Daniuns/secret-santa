"use client";

import { Button } from "@nextui-org/react";
import React from "react";
import { useFormStatus } from "react-dom";

const BtnDeleteGroup = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending}
      className="self-end"
      color="danger"
      type="submit"
    >
      {!pending ? "Excluir grupo" : "Excluindo..."}
    </Button>
  );
};

export default BtnDeleteGroup;
