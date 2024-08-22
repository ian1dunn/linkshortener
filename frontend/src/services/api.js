import axios from 'axios';

export let ROOT_URL = 'http://127.0.0.1:8000/api';
export let TOKEN_ENDPOINT = '/token/';
export let TOKEN_REFRESH_ENDPOINT = '/refresh/';

const client = axios.create({
    baseURL: ROOT_URL
});

export default client;