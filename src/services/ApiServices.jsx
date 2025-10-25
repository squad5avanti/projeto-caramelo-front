import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


// Pets
export const savePet = (data) => api.post("/pets", data);
export const getAllPets = () => api.get("/pets");
export const getPetById = (id) => api.get(`/pets/${id}`);
export const updatePet = (id, data) => api.put(`/pets/${id}`, data);
export const deletePet = (id) => api.delete(`/pets/${id}`);


// Users
export const saveUser = (data) => api.post("/usuarios", data);
export const getAllUsers = () => api.get("/usuarios");
export const getUserById = (id) => api.get(`/usuarios/${id}`);
export const updateUser = (id, data) => api.put(`/usuarios/${id}`, data);
export const deleteUser = (id) => api.delete(`/usuarios/${id}`);

// Adotantes
export const salvarAdotante = (data) => api.post("/adotantes", data);
export const AdotanteController = () => api.get("/adotantes");
export const atualizarAdotante = (id, data) => api.put(`/adotantes/${id}`, data);
export const removerAdotante = (id) => api.delete(`/adotantes/${id}`);