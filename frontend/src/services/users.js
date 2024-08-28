import client, {USER_ENDPOINT} from "./api";

export const getUserByID = async (userID) => {
    const response = await client.get(USER_ENDPOINT + userID + '/');
    return response.data;
}

export const createUser = async (first_name, last_name, email, username, password) => {
    const response = await client.post(USER_ENDPOINT, {
        first_name: first_name,
        last_name: last_name,
        email: email,
        username: username,
        password: password
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return response.data;
}