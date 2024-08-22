import client, {LINK_ENDPOINT, USER_ENDPOINT} from "./api";

export const getAllLinks = async (accessToken) => {
    const response = await client.get(LINK_ENDPOINT, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization':'Bearer ' + String(accessToken)
        }
    });
    return response.data;
}

// export const getUserLinks = async (userID) => {
//     const userResponse = await client.get(USER_ENDPOINT, {
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization':'Bearer ' + String(accessToken)
//         }
//     });
//     return response.data;
// }