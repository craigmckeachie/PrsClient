// import { BASE_URL, checkStatus, parseJSON } from "../utility/FetchUtilities";
import { BASE_URL, checkStatus, parseJSON } from "../utility/fetchUtilities";
import { IUser } from "./IUser";

const url = `${BASE_URL}/users`;

export const userAPI = {
  list(): Promise<IUser[]> {
    return fetch(url).then(checkStatus).then(parseJSON);
  },

  find(id: number): Promise<IUser> {
    return fetch(`${url}/${id}`).then(checkStatus).then(parseJSON);
  },

  post(user: IUser) {
    return fetch(`${url}`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(checkStatus)
      .then(parseJSON);
  },

  put(user: IUser) {
    return fetch(`${url}/${user.id}`, {
      method: "PUT",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(checkStatus)
      .then(parseJSON);
  },

  delete(user: IUser) {
    return fetch(`${url}/${user.id}`, { method: "DELETE" })
      .then(checkStatus)
      .then(parseJSON);
  },
};
