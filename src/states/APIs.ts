import axios from "axios";

const apiUrl = "http://localhost:777";

export const get_user_all = async () => {
    const res = await axios.get(`${apiUrl}/users`);
    return res.data;
};
