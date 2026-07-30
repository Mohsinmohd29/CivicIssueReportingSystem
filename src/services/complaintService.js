import api from "../api/axios";

export const createComplaint = async (formData) => {
  const response = await api.post("/complaints", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

export const getMyComplaints = async () => {
  const response = await api.get("/complaints/my");
  return response.data;
};

export const getAllComplaints = async () => {
  const response = await api.get("/complaints");
  return response.data;
};

export const updateComplaintStatus = async (id, status) => {
  const response = await api.put(`/complaints/${id}/status`, {
    status,
  });

  return response.data;
};

export const getComplaintById = async (id) => {
  const response = await api.get(`/complaints/${id}`);
  return response.data;
};

export const getMyComplaintById = async (id) => {
  const response = await api.get(`/complaints/my/${id}`);
  return response.data;
};

export const deleteComplaint = async (id) => {
  const response = await api.delete(`/complaints/${id}`);
  return response.data;
};