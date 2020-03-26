import axios from 'axios';

const api = axios.create({
    baseURL: 'http://www.mocky.io/v2/5e7a11eb300000970093064d',
    // baseURL: 'https://api.github.com',
});

export default api;