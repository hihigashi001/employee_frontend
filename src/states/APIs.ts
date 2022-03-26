import axios from "axios";

const apiUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}`;

type auth_data = {
  username: string;
  password: string;
}

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
  status: string;
};

export const get_user_all = async () => {
  const res = await axios.get(`${apiUrl}/api/employees`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `JWT ${localStorage.JWT}`,
    },
  })
  return res.data;
};

export const post_user_create = async (data: create_data) => {
  const res = await axios
    .post(`${apiUrl}/api/employees/`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.JWT}`,
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
    .put(`${apiUrl}/api/employees/${data.id}`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.JWT}`,
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

export const get_user_detail = async (id: string) => {
  const res = await axios.get(`${apiUrl}/api/employees/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `JWT ${localStorage.JWT}`,
    },
  })
  return res.data;
};

export const delete_user = async (id: string) => {
  const res = await axios.delete(`${apiUrl}/api/employees/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `JWT ${localStorage.JWT}`,
    },
  })
  return res.data;
};

export const auth_login = async (data: auth_data) => {
  const res = await axios
    .post(`${apiUrl}/api/auth/jwt/create/`, data, {
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


export const token_refresh = async () => {
  const res = await axios
    .post(`${apiUrl}/api/auth/jwt/refresh/`, {
      refresh:localStorage.JWTR
    })
    .then((results) => {
      return results.data;
    })
    .catch((error) => {
      return error.response;
    });
  return res;
};
