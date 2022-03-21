import axios from "axios";

const apiUrl = "https://api3.amidakuji.net:10443";

type create_data = {
  employeeId: string;
  department1: string;
  department2: string;
  employeeClass: string;
  name: string;
  name_kana: string;
  mailAddress: string;
  position: string;
  joiningDate: string;
  retirementDate: string;
  suspensionDate: string;
  secondedDate: string;
  secondedDestination: string;
  maidenName: string;
  remarks: string;
};

type update_data = {
  id: number;
  employeeId: string;
  department1: string;
  department2: string;
  employeeClass: string;
  name: string;
  name_kana: string;
  mailAddress: string;
  position: string;
  joiningDate: string;
  retirementDate: string;
  suspensionDate: string;
  secondedDate: string;
  secondedDestination: string;
  maidenName: string;
  remarks: string;
};


export const get_user_all = async () => {
  const res = await axios.get(`${apiUrl}/users`);
  return res.data;
};

export const post_user_create = async (data: create_data) => {
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

export const post_user_update = async (data: update_data) => {
  const res = await axios
    .put(`${apiUrl}/users/${data.id}`, data, {
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
