"use client";

import { createContext, useState, useContext, useEffect } from "react";
import { jwtDecode } from "jwt-decode"; // Corrected import
import Cookies from "js-cookie";
import { getUser } from "@/services/userService";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);

  const updateUser = async () => {
    const token = Cookies.get("token");
    const cachedUser = localStorage.getItem("authUser");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        if (cachedUser) {
          const parsedUser = JSON.parse(cachedUser);

          // Check if the cached user matches the decoded user ID from the token
          if (parsedUser._id === decoded.userId) {
            setAuthUser(parsedUser); // Set the cached user
            return; // No need to refetch if user matches
          }
        }
        // If no cached user or mismatched user, fetch from the API
        const user = await getUser(decoded.userId, token);
        setAuthUser(user);
        localStorage.setItem("authUser", JSON.stringify(user));
      } catch (error) {
        setAuthUser(null);
        localStorage.removeItem("authUser");
        console.error("Error updating user:", error);
      }
    } else {
      if (cachedUser) {
        localStorage.removeItem("authUser");
        setAuthUser(null);
        throw new Error("Error updating user:", error);
      }
    }
  };

  useEffect(() => {
    if (!authUser) {
      const cachedUser = localStorage.getItem("authUser");
      if (cachedUser) {
        // Try to use the cached user first
        setAuthUser(JSON.parse(cachedUser));
      } else {
        // Only call updateUser if there's no cached user
        updateUser();
      }
    }
  }, [authUser]); // Ensure this runs only when authUser changes

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
