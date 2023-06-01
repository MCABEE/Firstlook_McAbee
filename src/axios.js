import axios from "axios";

const instance = axios.create({

    baseURL: "http://localhost:3500/"

    // baseURL: "https://www.herseymensformals.ml/"
})

export default instance