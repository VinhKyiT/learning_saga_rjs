import { City, ListResponse } from "../../models";
import axiosClient from "./axiosClient";

const cityApi = {
  getCities: (): Promise<ListResponse<City>> => {
    const url = "/cities";
    return axiosClient.get(url, { params: { _limit: 10 } });
  },
};
export default cityApi;
