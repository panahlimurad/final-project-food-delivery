import axios from "axios";



export const instanceAxiosAdmin = axios.create({
    baseURL: "http://localhost:3000",
})