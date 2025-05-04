import { endpoints } from "@/config";

export const getUser = async (userId, token) => {
  const res = await fetch(`${endpoints.getUser}${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }
  return data.user;
};

export const chatUsers = async (token) => {
  const res = await fetch(endpoints.getChatUsers, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data.chatUsers;
};
