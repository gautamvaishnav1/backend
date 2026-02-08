import axios from "axios";

const api = axios.create({
  baseURL:'https://ideal-spoon-5gxj696jjgq43vw6r-3000.app.github.dev/',
  withCredentials:true
});

export default api;
