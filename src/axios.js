import axios from "axios";

const instance = axios.create({
  baseURL: "https://tiktok-backend-mern-app.herokuapp.com/",
});

export default instance;
