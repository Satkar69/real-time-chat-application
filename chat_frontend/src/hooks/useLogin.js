"use client";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useAuthContext } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { loginUser } from "@/services/authService";
import Cookies from "js-cookie";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { updateUser } = useAuthContext();
  const router = useRouter();
  const login = async (formData) => {
    const success = handleInputErrors(formData);
    if (!success) return;
    setLoading(true);
    try {
      const token = await loginUser(formData);
      Cookies.set("token", token, { expires: 30 });
      updateUser();
      router.push("/");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, login };
};

const handleInputErrors = ({ username, password }) => {
  if (!username || !password) {
    toast.error("please fill in all the fields");
    return false;
  }
  return true;
};

export default useLogin;
