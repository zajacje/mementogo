import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080/api", // this can be changed, depending on REST APIs that server configures
  headers: {
    "Content-type": "application/json"
  }
});

