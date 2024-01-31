import { getMembersGroup } from "@/app/services/group";
import { groupSchema, userGroupSchema } from "@/app/schemas/groups";
import { z } from "zod";
import { Card, CardHeader, Divider } from "@nextui-org/react";

const GuestListById = async ({
  members,
}: {
  members: z.infer<typeof userGroupSchema>[];
}) => {
  return (
    <div className="flex gap-6">
      {members.map((m) => {
        return (
          <Card key={m.id} isPressable className="max-w-[400px]">
            <CardHeader className="flex gap-3">
              <div className="flex flex-col">
                <p className="text-md text-left">{m.userName}</p>
                <p className="text-md text-left">{m.userEmail}</p>
              </div>
            </CardHeader>
          </Card>
        );
      })}
    </div>
  );
};

export default GuestListById;
