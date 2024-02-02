"use client";

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import React, { useEffect } from "react";
import Form from "./Form";
import { useFormState, useFormStatus } from "react-dom";
import { createGroup } from "@/app/services/group";

const CreateGroup = () => {
  const initialStateForm = { message: "", errors: {} };
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [state, dispatch] = useFormState(createGroup, initialStateForm);

  useEffect(() => {
    if (!state?.errors) {
      onClose();
    }
  }, [state?.errors]);

  const onAction = (event: any) => {
    dispatch(event);
  };

  const BtnSubmit = () => {
    const allData = useFormStatus();

    return (
      <Button disabled={allData.pending} type="submit" color="primary">
        {!allData.pending ? "Criar" : "Criando..."}
      </Button>
    );
  };

  return (
    <div>
      <Button className="" onPress={onOpen}>
        Criar grupo
      </Button>
      <Modal className="dark" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <form action={onAction}>
              <ModalHeader className="flex flex-col gap-1">
                Criar grupo
              </ModalHeader>
              <ModalBody>
                <Form errors={state?.errors} />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" onPress={onClose}>
                  Cancelar
                </Button>
                <BtnSubmit />
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CreateGroup;
