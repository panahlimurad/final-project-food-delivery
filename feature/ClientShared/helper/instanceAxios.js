import axios from "axios";



export const instanceAxios = axios.create({
    baseURL:"",
    timeout: 2000,
})