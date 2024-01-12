import axios from "axios";
import { config } from "../helpers/config";
const API_URL = config.api.baseUrl;

export const createMessage = async (payload) => {
  const resp = await axios.post(`${API_URL}/contactMessages/save`, payload);
  // Backendtan gelen response direkt olarak resp.data olarak alinir.
  const data = resp.data;
  return data;
};
