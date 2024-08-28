import client, {USER_ENDPOINT} from "./api";

export const getUserByID = async (userID) => {
    const response = await client.get(USER_ENDPOINT + userID + '/');
    return response.data;
}