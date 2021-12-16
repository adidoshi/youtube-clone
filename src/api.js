import axios from "axios";

const request = axios.create({
  baseURL: `https://youtube.googleapis.com/youtube/v3`,
  params: {
    key: "AIzaSyAaTXsTKWyZtLnamyo3oVoGsbwfZY5gVP8",
  },
});

export default request;
