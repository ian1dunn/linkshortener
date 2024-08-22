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
        });
    return response.data;
}

export const update = async (authTokens) => {
    const response = await client.post(
        TOKEN_REFRESH_ENDPOINT,
        {
            refresh: authTokens?.refresh,
            headers: {
                'Content-Type': 'application/json'
            }
        });

    return response.data;
}