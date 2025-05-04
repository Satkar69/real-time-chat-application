"use client";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useAuthContext } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { signupUser } from "@/services/authService";
import Cookies from "js-cookie";

const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const { updateUser } = useAuthContext();
  const router = useRouter();
  const signup = async (formData) => {
    const success = handleInputErrors(formData);
    if (!success) return;
    setLoading(true);
    try {
      const token = await signupUser(formData);
      Cookies.set("token", token, { expires: 30 });
      updateUser();
      router.push("/dashboard");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, signup };
};

const handleInputErrors = ({
  fullname,
  username,
  password,
  confirmPassword,
  gender,
}) => {
  if (!fullname || !username || !password || !confirmPassword || !gender) {
    toast.error("Please fill in all the fields");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords don't match");
    return false;
  }
  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }
  toast.success("Signup success!! logging in....");
  return true;
};

export default useSignUp;
