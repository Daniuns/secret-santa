import axios from "axios";
import { getMembersGroup } from "../group";

interface userGroupToSort {
  id: string;
  userEmail: string;
  userName: string;
  updatedAt: string;
  deletedAt: string;
  secretSanta: string | null;
}

const emailService = async (groupId: string) => {
  const members = await getMembersGroup(groupId);
  let membersList: userGroupToSort[] = members.map((m) => ({
    ...m,
    secretSanta: null,
  }));

  const chooseForMe = (me: any) => {
    const availableIds = membersList
      .filter(
        (member) =>
          me.id !== member.id && //verifica se não sou eu mesmo
          !membersList.find((m) => m.secretSanta == member.userName) && // Verifica se é uma pessoa que já me tirou.
          !(
            membersList.filter((m) => !m.secretSanta).length > 1 &&
            membersList.indexOf(member) === 0
          ) // Essa condição é para que seja fechado um círculo e termine com o membro que iniciou.
      )
      .map((m) => m.id);

    const sortedId = Math.floor(Math.random() * availableIds.length) + 0;
    const member = membersList.find(
      (member) => member.id == availableIds[sortedId]
    );

    return member;
  };

  const sort = (idIsChoosing: string): any => {
    const membersToSort = membersList.filter((member) => !member.secretSanta);
    if (membersToSort.length < 1) return;
    const myFriend = chooseForMe(
      membersList.find((m) => m.id === idIsChoosing)
    );

    if (!myFriend && membersList.find((m) => !m.secretSanta)) {
      membersList = members.map((m) => ({ ...m, secretSanta: null }));
      return sort(membersList[0].id);
    }

    if (!myFriend) return;

    membersList = membersList.map((m) => {
      if (m.id == idIsChoosing) {
        m.secretSanta = myFriend.userName;
      }

      return m;
    });

    return sort(myFriend.id);
  };

  sort(membersList[0].id);

  const emailsToSend = membersList.map(async (m) => {
    return sendEmail(
      { userName: m.userName, userEmail: m.userEmail },
      m.secretSanta
    );
  });

  const result = await Promise.all(emailsToSend);

  return result;
};

const sendEmail = (
  to: { userName: string; userEmail: string },
  secretSanta: string | null
) => {
  if (!secretSanta) return;

  const data = {
    sender: {
      name: "The Blacksmith",
      email: "daniel.blacksmithdeveloper@gmail.com",
    },
    to: [
      {
        email: to.userEmail,
        name: to.userName,
      },
    ],
    subject: "Amigo Secreto",
    htmlContent: `<html><head></head><body><p>Olá, ${to.userName}. Seu amigo secreto é: ${secretSanta} </p></p></body></html>`,
  };
  try {
    const request = axios.post("https://api.brevo.com/v3/smtp/email", data, {
      headers: {
        accept: "application/json",
        "api-key": process.env.BREVO_KEY,
        "content-type": "application/json",
      },
    });
    return request;
  } catch (err) {
    console.error(err);
  }
};

export default emailService;
