import client, {TOKEN_ENDPOINT, TOKEN_REFRESH_ENDPOINT} from "./api";

export const login = async (username, password) => {
    const response = await client.post(
        TOKEN_ENDPOINT,
        {
            username: username,
            password: password,
            headers: {
                'Content-Type': 'application/json'
            }
        }).catch(() => {
            return null
        });

    if (response == null || response.status !== 200)
        return null;

    return response.data;
}

export const update = async (refreshToken) => {
    const response = await client.post(
        TOKEN_REFRESH_ENDPOINT,
        {
            refresh: refreshToken,
            headers: {
                'Content-Type': 'application/json'
            }
        });

    if (response.status !== 200)
        return null;

    return response.data;
}