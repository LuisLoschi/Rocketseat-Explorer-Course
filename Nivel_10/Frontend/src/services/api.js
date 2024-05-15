import axios from "axios";

export const api = axios.create({
    baseURL: "https://mynotes-pz34.onrender.com"
});
