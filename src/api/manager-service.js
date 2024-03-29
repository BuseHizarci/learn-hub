import axios from "axios";
import { config } from "../helpers/config";
import { getAuthHeader } from "../helpers/auth-header";

const API_URL = config.api.baseUrl; // https://mycampusmates.com/app

export const getManagersByPage = async (
  page = 0,
  size = 2,
  sort = "name",
  type = "asc"
) => {
  const resp = await axios.get(
    `${API_URL}/dean/search?page=${page}&size=${size}&sort=${sort}&type=${type}`,
    {
      headers: getAuthHeader(),
    }
  );
  const data = resp.data;
  return data;
};

export const createManager = async (payload) => {
  const resp = await axios.post(`${API_URL}/vicedean/save`, payload, {
    headers: getAuthHeader(),
  });
  const data = resp.data;
  return data;
};

export const deleteManager = async (id) => {
  const resp = await axios.delete(`${API_URL}/vicedean/delete/${id}`, {
    headers: getAuthHeader(),
  });
  const data = resp.data;
  return data;
};
export const UpdateManager = async (id, payload) => {
  const resp = await axios.put(`${API_URL}/vicedean/update/${id}`, payload, {
    headers: getAuthHeader(),
  });
  const data = resp.data;
  return data;
};
