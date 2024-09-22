import axios from 'axios';

let PORT = ''

if (window.location.port === '3000') {
    // Running in a testing environment, so don't connect to the Nginx proxy
    PORT = ':8000'
}

export let ROOT_URL = `${window.location.protocol}//${window.location.hostname}${PORT}/api`;
export let TOKEN_ENDPOINT = '/token/';
export let TOKEN_REFRESH_ENDPOINT = TOKEN_ENDPOINT + 'refresh/';
export let LINK_ENDPOINT = '/links/';
export let USER_ENDPOINT = '/users/'

const client = axios.create({
    baseURL: ROOT_URL
});

export default client;