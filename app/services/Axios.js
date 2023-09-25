import axios from "axios";

const Axios = axios.create({
  baseURL: "https://cvgezgini.com/api/store",
  headers: {
    "Content-Type": "application/json",
  },
});

export default Axios;
