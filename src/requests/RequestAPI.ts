// import { BASE_URL, checkStatus, parseJSON } from "../utility/FetchUtilities";
import { BASE_URL, checkStatus, parseJSON } from "../utility/fetchUtilities";
import { IRequest } from "./IRequest";

const url = `${BASE_URL}/requests`;

export const requestAPI = {
  list(status?: string): Promise<IRequest[]> {
    // let requestsUrl = `${url}?_expand=user&expand=product`;
    let requestsUrl = `${url}`;
    // if (status) requestsUrl += `&status=${status}`;
    if (status) requestsUrl += `/status/${status.toUpperCase()}`;
    return fetch(requestsUrl).then(checkStatus).then(parseJSON);
  },

  find(id: number): Promise<IRequest> {
    return fetch(`${url}/${id}?embed=requestlines`)
      .then(checkStatus)
      .then(parseJSON);
  },

  post(request: IRequest) {
    return fetch(`${url}`, {
      method: "POST",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(checkStatus)
      .then(parseJSON);
  },

  put(request: IRequest) {
    return fetch(`${url}/${request.id}`, {
      method: "PUT",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(checkStatus);
  },

  delete(id: number) {
    return fetch(`${url}/${id}`, { method: "DELETE" }).then(checkStatus);
  },

  approve(request: IRequest) {
    return fetch(`${url}/approve/${request.id}`, {
      method: "PUT",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(checkStatus);
  },

  reject(request: IRequest) {
    return fetch(`${url}/reject/${request.id}`, {
      method: "PUT",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(checkStatus);
  },
};
