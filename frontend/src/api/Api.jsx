import axios from "axios"

const baseApi = axios.create({
    // baseURL: "https://hotel-ospite-residency.onrender.com",
    baseURL: "http://localhost:8080",
    withCredentials: true
})

export { baseApi }