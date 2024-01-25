import prisma from "@/prisma";

export const addUser = async () => {
  await prisma.user.create({
    data: {
      name: "Daniel Ferreira",
      email: "daniel.machadofe@gmail.com",
    },
  });
};
