import React from "react";
import GuestListById from "@/app/ui/Groups/GuestsListById";
import { deleteGroup, getMembersGroup, sortGroup } from "@/app/services/group";
import BtnDeleteGroup from "@/app/ui/Groups/GuestList/BtnDeleteGroup";
import BtnSortGroup from "@/app/ui/Groups/GuestList/BtnSortGroup";

const Page = async ({ params }: any) => {
  const { id } = params;
  const delGroup = await deleteGroup.bind(null, id);
  const groupSorter = await sortGroup.bind(null, id);
  const members = await getMembersGroup(id);

  return (
    <main className="flex justify-between min-h-[calc(100vh-65px)] flex-col items-start p-12">
      <div className="flex flex-col w-full">
        <p className="mb-12">Membros Participantes</p>
        {!members?.length && (
          <div className="self-center">Nenhum membro participante</div>
        )}
        <div className="flex gap-6 flex-wrap">
          <GuestListById members={members} />
        </div>
      </div>
      <div className="flex w-full justify-end mr-2">
        <form className="mr-4" action={groupSorter}>
          <BtnSortGroup />
        </form>
        <form action={delGroup}>
          <BtnDeleteGroup />
        </form>
      </div>
    </main>
  );
};

export default Page;
