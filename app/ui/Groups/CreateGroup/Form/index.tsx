"use client";

import { createGroup } from "@/app/services/group";
import { Button } from "@nextui-org/react";
import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import { Input } from "@nextui-org/react";
import GuestList from "../../GuestList";

const Form = ({ errors }: any) => {
  return (
    <>
      <Input
        className=""
        id="groupName"
        label="Nome do grupo"
        name="groupName"
      />
      <div id="customer-error" aria-live="polite" aria-atomic="true">
        {errors &&
          errors.groupName?.map((error: string) => (
            <p className="text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
      </div>
      Integrantes
      <GuestList />
    </>
  );
};

export default Form;
