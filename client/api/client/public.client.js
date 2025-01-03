/* eslint-disable no-unused-vars */
import axios from "axios";
import queryString from "query-string";
const localHostUrl = "http://127.0.0.1:4000/";
const prodUrl =  "https://api.localhost:4000/";
const baseURL = process.env.NEXT_PUBLIC_API_URL;
//const baseURL = `${prodUrl}api/v1/`;

const publicClient = axios.create({
    baseURL,
    paramsSerializer: {
        encode: (params) => queryString.stringify(params),
    },
});

publicClient.interceptors.request.use(async (config) => {
    const sessionId = localStorage.getItem('session_id') || '';
    return {
        ...config,
        headers: {
            ...config.headers,
            "Content-Type": "application/json",
            "Session-ID": sessionId,
        },
    };
});


publicClient.interceptors.response.use(
    (response) => {
        if (response && response.data) return response.data;
        return response;
    },
    (err) => {
        throw err.response.data;
    }
);

export default publicClient;