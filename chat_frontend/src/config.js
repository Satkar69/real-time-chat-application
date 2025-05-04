// const localApiUrl = "http://localhost:5000/api";
const prodApiUrl = "https://chat-backend-241r.onrender.com/api";
const apiUrl = prodApiUrl;

export const endpoints = {
  login: `${apiUrl}/auth/login`,
  signup: `${apiUrl}/auth/signup`,
  getUser: `${apiUrl}/chatUsers/user/`,
  getChatUsers: `${apiUrl}/chatUsers`,
  sendMessage: `${apiUrl}/messages/send-message/`,
  getMessages: `${apiUrl}/messages/get-messages/`,
};
