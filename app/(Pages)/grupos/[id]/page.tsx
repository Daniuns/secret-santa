import { Button } from "@nextui-org/react";
import React from "react";
import GuestListById from "@/app/ui/Groups/GuestsListById";
import { deleteGroup, getMembersGroup } from "@/app/services/group";

const Page = async ({ params }: any) => {
  const { id } = params;
  const delGroup = deleteGroup.bind(null, id);
  const members = await getMembersGroup(id);

  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      <form action={delGroup}>
        <Button className="self-end" color="danger" type="submit">
          Excluir grupo
        </Button>
      </form>
      <p>Membros Participantes</p>
      <GuestListById members={members} />
    </main>
  );
};

export default Page;
