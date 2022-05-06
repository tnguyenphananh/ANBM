import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: "http://band-cs322.herokuapp.com/api"
})