import React from "react";
import CardGroup from "./card";
import { getGroups } from "@/app/services/group";
import CreateGroup from "./CreateGroup";

const Groups = async () => {
  const groups = await getGroups();

  return (
    <>
      <div className="flex justify-between w-full align-center mb-12">
        <h1>Meus Grupos</h1>
        <CreateGroup />
      </div>
      <div className="flex gap-6 flex-wrap">
        {groups.map((g) => (
          <CardGroup key={g.id} {...g} />
        ))}
      </div>
    </>
  );
};

export default Groups;
