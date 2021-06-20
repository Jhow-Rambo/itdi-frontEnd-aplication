import axios from 'axios';

const url = 'https://itdi-test-api.herokuapp.com/'
//http://localhost:8000
const axiosInstance = axios.create({
    baseURL: url
});

/*axios.Instance.interceptors.request.use(
    function (config) {
        const token = window.localStorage.token;
        if (token) {
            config.headers.Authorization = token
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);*/

export const api = {
    get(endpoint) {
        return axiosInstance.get(endpoint);
    },
    post(endpoint, body) {
        return axiosInstance.post(endpoint, body);
    },
    put(endpoint, body) {
        return axiosInstance.put(endpoint, body);
    },
    delete(endpoint) {
        return axiosInstance.delete(endpoint);
    }
}