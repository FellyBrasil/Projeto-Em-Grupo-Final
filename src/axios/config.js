import axios from "axios";

export const progCariocas = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

export const createSession = async (email, senha) => {
  return progCariocas.post("/login", { email, senha });
};
