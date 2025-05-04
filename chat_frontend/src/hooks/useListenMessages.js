"use client";

import { useSocketContext } from "@/contexts/SocketContext";
import useConversation from "@/lib/zustand/useConversation";
import { useEffect } from "react";
const notificationSound = "/sounds/notification.mp3";

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      newMessage.shouldShake = true;
      const sound = new Audio(notificationSound);
      sound.play();
      setMessages([...messages, newMessage]);
    });
    return () => socket?.off("newMessage");
  }, [socket, messages, setMessages]);
};

export default useListenMessages;
