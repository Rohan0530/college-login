import axios from "axios";

let axiosInstance = axios.create({
    baseURL: "http://localhost:4500/api"
})

let helperFun = () => { }

let reqInterceptor = axiosInstance.interceptors.request.use((config) => {
    helperFun(true)
    return config
})

let resInterceptor = axiosInstance.interceptors.response.use((response) => {
    helperFun(false)
    return response
},
    (error) => {
        helperFun(false)
        return Promise.reject(error)
    }
)

export let setterFunction = (fn) => {
    helperFun = fn
}


export default axiosInstance