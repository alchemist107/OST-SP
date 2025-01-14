import Axios from "axios";
import { API_URL } from "src/data/Api";

export const getAll = (entity: string) => {
  return Axios.get(`${API_URL}/${entity}`).then(res => res.data);
};
export const getOne = (entity: string, id: string) => {
  return Axios.get(`${API_URL}/${entity}/${id}`).then(res => res.data);
};
