"use server";

import prisma from "@/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { v4 as uuidv4 } from "uuid";
import { groupSchema, userGroupSchema } from "@/app/schemas/groups";

const FormSchema = z.object({
  groupName: z
    .string()
    .min(3, { message: "Precisa conter pelo menos 3 caracteres" }),
});

export const getGroups = async (): Promise<z.infer<typeof groupSchema>[]> => {
  const result = await prisma.Group.findMany();
  return result;
};

export const getMembersGroup = async (
  groupId: string
): Promise<z.infer<typeof userGroupSchema>[]> => {
  const result = await prisma.UserGroup.findMany({
    where: {
      groupId,
    },
  });

  return result;
};

const CreateGroup = FormSchema.omit({});

export type State = {
  errors?: {};
  message?: String | null;
};

export const createGroup = async (prevState: State, formData: FormData) => {
  const emails = formData.getAll("guestsEmail[]");
  const names = formData.getAll("guestsName[]");
  const validatedFields = CreateGroup.safeParse({
    groupName: formData.get("groupName"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Group.",
    };
  }

  const { groupName } = validatedFields.data;
  const guests = names?.map((nome, index) => ({
    name: nome,
    email: emails[index],
  }));

  try {
    await prisma.$transaction(async (prisma: any) => {
      const group = await prisma.Group.create({
        data: {
          id: uuidv4(),
          name: groupName,
          ownerGroup: {
            connect: {
              id: 1,
            },
          },
        },
      });

      const userGroupCreatePromises = guests.map(async (g) => {
        try {
          const userGroup = await prisma.UserGroup.create({
            data: {
              id: uuidv4(),
              groupId: group.id,
              userName: g.name,
              userEmail: g.email,
            },
          });
          return userGroup;
        } catch (userGroupError) {
          console.error("Error creating UserGroup:", userGroupError);
          // Rejeitar a promessa para que a Promise.all possa capturar o erro
          throw userGroupError;
        }
      });

      await Promise.all(userGroupCreatePromises);
    });
  } catch (error) {
    console.error("Transaction error:", error);
    return {
      message: "Database Error: Failed to Create Invoice.",
    };
  }

  revalidatePath("/grupos");
  redirect("/grupos");
};

export const deleteGroup = async (id: string) => {
  const groupMembers = await getMembersGroup(id);

  try {
    await prisma.$transaction(async (prisma: any) => {
      const userGroupDeletePromises = groupMembers.map(async (gm) => {
        try {
          const userGroup = await prisma.UserGroup.deleteMany({
            where: {
              id: gm.id,
            },
          });
          return userGroup;
        } catch (userGroupError) {
          console.error("Error deleting UserGroup:", userGroupError);

          throw userGroupError;
        }
      });

      await prisma.Group.deleteMany({
        where: {
          id,
        },
      });

      await Promise.all(userGroupDeletePromises);
    });
  } catch (error) {
    return { message: "Database Error: Failed to Delete Invoice." };
  }
  revalidatePath("/grupos");
  redirect("/grupos");
};
