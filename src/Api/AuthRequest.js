import axios from "axios";

const API = axios.create({ baseURL: `${ process.env.REACT_APP_BACKEND_URL }` });

export const logIn = (formData) => API.post("/auth/login", formData);

export const register = (formData) => API.post("/enquiry/createEnquiry", formData);

