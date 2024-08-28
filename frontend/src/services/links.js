import client, {LINK_ENDPOINT, ROOT_URL, USER_ENDPOINT} from "./api";

export const getAllLinks = async () => {
    const response = await client.get(LINK_ENDPOINT);
    return response.data;
}

export const getUserLinks = async (userID) => {
    const response = await client.get(USER_ENDPOINT + userID + LINK_ENDPOINT);
    return response.data;
}

export const getLink = async (short_url) => {
    // TODO add new endpoint
    const allLinks = await getAllLinks()
    return allLinks.find((link) => link.short_url === short_url)
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

    if (response.status !== 200 || response.status !== 201) {
        throw Error(response.statusText);  // TODO implement error handling wrapper for API errors and make more descriptive from axios
    }

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

export const incrementLinkClicks = async (short_url) => {
    const link = await getLink(short_url); // TODO add new endpoint

    const response = await client.patch(ROOT_URL + LINK_ENDPOINT + link.id + "/",
        {
            clicks: link.clicks + 1
        });
    return response.data;
}
