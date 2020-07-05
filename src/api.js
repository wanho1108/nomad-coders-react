import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "f39d09696e58b75ea6692694c9706ed5",
    language: "en-US",
  },
});

export default api;
