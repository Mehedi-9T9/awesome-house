import axios from 'axios';


const axiosSecure = axios.create({
    baseURL: "https://awesome-house-server.vercel.app"
})
const useAxiosSecure = () => {
    const token = localStorage.getItem("access-token")
    axiosSecure.interceptors.request.use(function (config) {
        // Do something before request is sent
        config.headers.authorization = token
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });


    return axiosSecure
};

export default useAxiosSecure;