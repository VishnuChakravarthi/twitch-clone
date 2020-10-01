import axios from "axios";

export default axios.create({
  baseURL: "https://twitch-stream-api.herokuapp.com/",
});
