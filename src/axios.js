import axios from "axios";

const instance = axios.create({

    baseURL: "http://localhost:3500/"

    // baseURL: "https://api.firstlook.pro/"
})

export default instance