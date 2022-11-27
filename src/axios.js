import axios from "axios";

const instance = axios.create({
    baseURL: "https://whatsapp-server-alpha.vercel.app/"
});
export default instance;