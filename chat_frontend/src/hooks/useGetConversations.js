"use client";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { chatUsers } from "@/services/userService";
import Cookies from "js-cookie";

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);
  const token = Cookies.get("token");

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try {
        const data = await chatUsers(token);
        setConversations(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    getConversations();
  }, []);
  return { loading, conversations };
};

export default useGetConversations;
