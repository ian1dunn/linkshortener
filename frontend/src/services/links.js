import client, {LINK_ENDPOINT, ROOT_URL, USER_ENDPOINT} from "./api";

export const getUserLinks = async (accessToken, userID) => {
    const response = await client.get(USER_ENDPOINT + userID + LINK_ENDPOINT);
    return response.data;
}

export const createLink = async (accessToken, short_url, url) => {
    const response = await client.post(ROOT_URL + LINK_ENDPOINT, {
            // fields = ['id', 'short_url', 'url', 'owner', 'clicks', 'timestamp']
            short_url: short_url,
            url: url,
        },
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization':'Bearer ' + String(accessToken)
            }
        });
    return response.data;
}

export const deleteLink = async (accessToken, id) => {
    const response = await client.delete(ROOT_URL + LINK_ENDPOINT + id + "/",
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization':'Bearer ' + String(accessToken)
            }
        });
    return response.data;
}
