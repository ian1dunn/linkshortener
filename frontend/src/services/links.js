import client, {LINK_ENDPOINT, USER_ENDPOINT} from "./api";

export const getUserLinks = async (accessToken, userID) => {
    const response = await client.get(USER_ENDPOINT + userID + LINK_ENDPOINT, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization':'Bearer ' + String(accessToken)
        }
    });
    return response.data;
}
