import axios from "axios";

const instance = axios.create({
    baseURL: "https://whatsapp-server-onyi.onrender.com/"
});
export default instance;