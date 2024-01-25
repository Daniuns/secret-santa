import React from "react";
import CardGroup from "./card";
import { getGroups } from "@/app/services/group";
import CreateGroup from "./CreateGroup";

const Groups = async () => {
  const groups = await getGroups();

  return (
    <>
      <CreateGroup />
      <div className="flex gap-6">
        {groups.map((g) => (
          <CardGroup key={g.id} {...g} />
        ))}
      </div>
    </>
  );
};

export default Groups;
