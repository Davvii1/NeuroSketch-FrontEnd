import axios from "axios";

export const dalleapi = axios.create({
  baseURL: "https://neuro-sketch-backend.vercel.app",
  // baseURL: "http://localhost:8080",
});
