import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:5100" });

export const fetchFiles = () => API.get("/files");
export const createFile = (newFile) => API.post("/files", newFile);
export const updateFile = (id, updateFile) =>
  API.patch(`/files/${id}`, updateFile);
export const deleteFile = (id) => API.delete(`/files/${id}`);

export const login = () => API.get('/auth/orcid/login');
