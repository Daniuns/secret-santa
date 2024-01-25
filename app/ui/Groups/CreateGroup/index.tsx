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
import React from "react";
import Form from "./Form";
import { useFormState, useFormStatus } from "react-dom";
import { createGroup } from "@/app/services/group";

interface Props {}

const CreateGroup = () => {
  const initialStateForm = { message: "", errors: {} };
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [state, dispatch] = useFormState(createGroup, initialStateForm);
  const { pending } = useFormStatus();

  const onAction = (event: any) => {
    dispatch(event);
    onClose();
  };

  return (
    <div className="mb-12 self-end">
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
                <Button type="submit" color="primary">
                  Criar
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CreateGroup;
