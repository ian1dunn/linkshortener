import axios from 'axios';

export let ROOT_URL = `${window.location.protocol}//${window.location.hostname}:8000/api`;
export let TOKEN_ENDPOINT = '/token/';
export let TOKEN_REFRESH_ENDPOINT = TOKEN_ENDPOINT + 'refresh/';
export let LINK_ENDPOINT = '/links/';
export let USER_ENDPOINT = '/users/'

const client = axios.create({
    baseURL: ROOT_URL
});

export default client;