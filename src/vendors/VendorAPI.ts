// import { BASE_URL, checkStatus, parseJSON } from "../utility/FetchUtilities";
import { BASE_URL, checkStatus, parseJSON } from "../utility/fetchUtilities";
import { IVendor } from "./IVendor";

const url = `${BASE_URL}/vendors`;

export const vendorAPI = {
  list(): Promise<IVendor[]> {
    return fetch(url).then(checkStatus).then(parseJSON);
  },

  find(id: number): Promise<IVendor> {
    return fetch(`${url}/${id}`).then(checkStatus).then(parseJSON);
  },

  post(vendor: IVendor) {
    return fetch(`${url}`, {
      method: "POST",
      body: JSON.stringify(vendor),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(checkStatus)
      .then(parseJSON);
  },

  put(vendor: IVendor) {
    return fetch(`${url}/${vendor.id}`, {
      method: "PUT",
      body: JSON.stringify(vendor),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(checkStatus)
      .then(parseJSON);
  },

  delete(vendor: IVendor) {
    return fetch(`${url}/${vendor.id}`, { method: "DELETE" })
      .then(checkStatus)
      .then(parseJSON);
  },
};
