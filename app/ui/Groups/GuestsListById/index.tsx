import { getMembersGroup } from "@/app/services/group";
import { groupSchema, userGroupSchema } from "@/app/schemas/groups";
import { z } from "zod";
import { Card, CardHeader } from "@nextui-org/react";

const GuestListById = async ({
  members,
}: {
  members: z.infer<typeof userGroupSchema>[];
}) => {
  return (
    <>
      {members.map((m) => {
        return (
          <Card key={m.id} isPressable className="max-w-[400px] min-w-[300px]">
            <CardHeader className="overflow-hidden">
              <div className="flex flex-col">
                <p className="text-md text-left line-clamp-1">
                  Nome: {m.userName}
                </p>
                <p className="text-md text-left">E-mail: {m.userEmail}</p>
              </div>
            </CardHeader>
          </Card>
        );
      })}
    </>
  );
};

export default GuestListById;
