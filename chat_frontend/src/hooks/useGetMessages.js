"use client";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { getChatUserMessages } from "@/services/messageService";
import useConversation from "@/lib/zustand/useConversation";
import Cookies from "js-cookie";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();
  const token = Cookies.get("token");

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const data = await getChatUserMessages(selectedConversation._id, token);
        setMessages(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (selectedConversation?._id) getMessages();
    getMessages();
  }, [selectedConversation?._id, setMessages]);

  return { messages, loading };
};

export default useGetMessages;
