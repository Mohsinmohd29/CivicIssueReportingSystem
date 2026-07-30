import api from "../api/axios";

export const registerUser = async (formData) => {
  const response = await api.post("/auth/register", formData);
  return response.data;
};

export const loginUser = async (userData) => {
  const response = await api.post("/auth/login", userData);
  return response.data;
};

export const getCurrentUser = async () => {
  const response = await api.get("/auth/me");
  return response.data;
};