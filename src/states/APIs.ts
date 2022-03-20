import axios from "axios";

const apiUrl = "http://localhost:777";

export const get_user_all = async () => {
  const res = await axios.get(`${apiUrl}/users`);
  return res.data;
};

export const post_user_create = async (data: object) => {
  const res = await axios
    .post(`${apiUrl}/users`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((results) => {
      return results.data;
    })
    .catch((error) => {
      return error.response;
    });
  return res;
};
