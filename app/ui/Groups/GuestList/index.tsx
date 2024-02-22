"use client";

import React, { useMemo, useState } from "react";
import { Button, Input, Listbox, ListboxItem } from "@nextui-org/react";
import { TrashIcon } from "@/public/assets/Icons/TrashIcon";
import { useFormState } from "react-dom";

export const ListboxWrapper = ({ children }: any) => (
  <div className="w-full max-full border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
    {children}
  </div>
);

const GuestList = () => {
  const initialStateErrors = { name: "", email: "" };
  const [isAdding, setIsAdding] = useState(false);
  const [errors, setErrors] = useState(initialStateErrors);

  const [guestToAdd, setGuestToAdd] = useState<{
    name: string;
    email: string;
  }>();
  const [guestsList, setGuestsList] = useState<any[]>([]);

  const onAddGuest = async () => {
    const isValid = validate();
    if (!isValid) return;
    console.log("isValid", isValid);

    setGuestsList([...guestsList, guestToAdd]);
    setIsAdding(false);
    setGuestToAdd((prevValue) => undefined);
  };

  // validação provisória.
  const validate = () => {
    let newErrors = { ...initialStateErrors };

    if (!guestToAdd?.name) {
      newErrors = {
        ...newErrors,
        name: "mínimo 3 caracteres",
      };
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(guestToAdd?.email)) {
        newErrors = {
          ...newErrors,
          email: "Esse e-mail não é válido",
        };
      }
    }

    if (!guestToAdd?.email) {
      newErrors = {
        ...newErrors,
        email: "mínimo 3 caracteres",
      };
    }

    if (guestsList.some((g) => g?.email === guestToAdd?.email)) {
      newErrors = {
        ...newErrors,
        email: "Esse e-mail já está na lista",
      };
    }

    if (guestsList.some((g) => g?.email === guestToAdd?.email)) {
      newErrors = {
        ...newErrors,
        email: "Esse e-mail já está na lista",
      };
    }

    console.log(newErrors);

    setErrors(newErrors);

    if (newErrors?.name || newErrors?.email) return false;
    return true;
  };

  const removeGuest = (emailToRemove: string) => {
    setGuestsList((prevGuestsList) =>
      prevGuestsList.filter((guest) => guest.email !== emailToRemove)
    );
  };

  const onChangeNewGuest = (newField: any) => {
    setGuestToAdd({ ...guestToAdd, ...newField });
  };

  return (
    <div>
      <ListboxWrapper>
        <Listbox
          classNames={{
            base: "max-w-full",
            list: "max-h-[300px] overflow-auto",
          }}
          defaultSelectedKeys={["1"]}
          items={guestsList}
          label="Assigned to"
          variant="flat"
          emptyContent="Não há integrantes nesse grupo"
        >
          {(item) => (
            <ListboxItem key={item.email} textValue={item.name}>
              <div className="flex justify-between">
                <div>
                  <Input
                    className="hidden"
                    name="guestsName[]"
                    value={item.name}
                  />
                  <Input
                    className="hidden"
                    name="guestsEmail[]"
                    value={item.email}
                  />
                  <div className="flex gap-2 items-center">
                    <div className="flex flex-col">
                      <span className="text-small">{item.name}</span>
                      <span className="text-tiny text-default-400">
                        {item.email}
                      </span>
                    </div>
                  </div>
                </div>
                <TrashIcon
                  name={item.email}
                  className={"text-xl text-default-500 flex-shrink-0"}
                  onClick={() => removeGuest(item.email)}
                />
              </div>
            </ListboxItem>
          )}
        </Listbox>
      </ListboxWrapper>

      {!isAdding && (
        <Button className="mt-4" onClick={() => setIsAdding(true)}>
          + adicionar
        </Button>
      )}

      {!!isAdding && (
        <>
          <Input
            onChange={(v) => onChangeNewGuest({ name: v.target.value })}
            value={guestToAdd?.name}
            className="my-4"
            label="nome"
            errorMessage={errors?.name}
          />
          <Input
            onChange={(v) => onChangeNewGuest({ email: v.target.value })}
            value={guestToAdd?.email}
            className="my-4"
            label="email"
            errorMessage={errors?.email}
          />
          <Button
            onClick={() => setIsAdding(false)}
            className="mr-4"
            color="danger"
          >
            Cancelar
          </Button>
          <Button onClick={onAddGuest} form="addGuestForm" color="primary">
            Adicionar
          </Button>
        </>
      )}
    </div>
  );
};

export default GuestList;
