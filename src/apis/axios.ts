import axios, { AxiosResponse } from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export const fetchApi = async (endpoint: string) => {
  return await instance.get(endpoint).then((response: AxiosResponse) => {
    return response?.data;
  });
};
