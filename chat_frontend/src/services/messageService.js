import { endpoints } from "@/config";

export const sendMessageToChatUser = async (recieverId, message, token) => {
  const res = await fetch(`${endpoints.sendMessage}${recieverId}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message);
  }
  return data.newMessage;
};

export const getChatUserMessages = async (userToChatId, token) => {
  const res = await fetch(`${endpoints.getMessages}${userToChatId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message);
  }
  return data.messages;
};
