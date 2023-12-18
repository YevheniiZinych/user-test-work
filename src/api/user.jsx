import axios from "axios";

axios.defaults.baseURL = "https://frontend-test-assignment-api.abz.agency";

export const setAuthHeader = (token) => {
  if (token === undefined) return;
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register = async () => {
  const {
    data: { token },
  } = await axios.get("/api/v1/token");
  setAuthHeader(token);
  return token;
};

export const getUsers = async () => {
  const {
    data: { users },
  } = await axios.get("/api/v1/users");

  return users;
};
