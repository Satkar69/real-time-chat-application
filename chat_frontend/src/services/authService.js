import { endpoints } from "@/config";

export const signupUser = async (userData) => {
  const res = await fetch(endpoints.signup, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data.token;
};

export const loginUser = async (loginData) => {
  const res = await fetch(endpoints.login, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data.token;
};
