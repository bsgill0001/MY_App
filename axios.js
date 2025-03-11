import axios from "axios";

const API = axios.create({
  baseURL: "http://10.0.2.2:5000", // Port 5000 use karo agar backend yahi chal raha hai
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;