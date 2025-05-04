"use client";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { sendMessageToChatUser } from "@/services/messageService";
import useConversation from "@/lib/zustand/useConversation";
import Cookies from "js-cookie";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();
  const token = Cookies.get("token");

  const sendMessage = async (message) => {
    setLoading(true);
    try {
      const data = await sendMessageToChatUser(
        selectedConversation._id,
        message,
        token
      );
      setMessages([...messages, data]);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { sendMessage, loading };
};

export default useSendMessage;
