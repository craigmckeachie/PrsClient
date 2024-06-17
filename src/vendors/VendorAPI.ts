// import { BASE_URL, checkStatus, parseJSON } from "../utility/FetchUtilities";
import { BASE_URL, checkStatus, parseJSON } from "../utility/fetchUtilities";
import { IVendor } from "./IVendor";

const url = `${BASE_URL}/vendors`;
export const vendorAPI = {
  list(): Promise<IVendor[]> {
    return fetch(url).then(checkStatus).then(parseJSON);
  },

  //   find(id: number): Promise<Project> {
  //     return fetch(`${url}/${id}`)
  //       .then(checkStatus)
  //       .then(parseJSON)
  //       .then(convertToProjectModel);
  //   },

  //   put(project: Project) {
  //     return fetch(`${url}/${project.id}`, {
  //       method: "PUT",
  //       body: JSON.stringify(project),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     })
  //       .then(checkStatus)
  //       .then(parseJSON)
  //       .catch((error: TypeError) => {
  //         console.log("log client error " + error);
  //         throw new Error(
  //           "There was an error updating the project. Please try again."
  //         );
  //       });
  //   },
};

export { projectAPI };
