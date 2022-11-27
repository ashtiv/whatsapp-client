import axios from "axios";

const instance = axios.create({
    baseURL: "http://whatsapp-server-alpha.vercel.app/"
});
export default instance;