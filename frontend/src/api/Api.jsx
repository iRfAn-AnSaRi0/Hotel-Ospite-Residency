import axios from "axios"

const baseApi = axios.create({
     baseURL: "https://hotel-ospite-residency.onrender.com/api/v1",
    // baseURL: "http://localhost:8080/api/v1",
    withCredentials: true
})

export { baseApi }