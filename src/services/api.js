import axios from "axios";

const API = axios.create({
  // baseURL: "http://localhost:5000/api",
  baseURL: "https://padho-india-backend.onrender.com/api",
  headers: { "Content-Type": "application/json" },
});

export const registerUser = (userData) => API.post("/auth/register", userData);

export default API;
