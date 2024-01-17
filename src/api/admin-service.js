import axios from "axios";
import { config } from "../helpers/config";
import { getAuthHeader } from "../helpers/auth-header";
const API_URL = config.api.baseUrl;

export const getAdminsByPage = async (
  page = 0,
  size = 20,
  sort = "name",
  type="asc"
) => {
  const resp = await axios.get(
    `${API_URL}/admin/getAll?page=${page}&size=${size}&sort=${sort}&type=${type}`,
    {
      headers: getAuthHeader(),
    }
  );
  const data = resp.data;
  return data;
};

// Fonksiyonlar ve paramereler denemesi yap
// Axios ile post ve get seklinde istekler atilacak.
