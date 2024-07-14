// export const BASE_URL = "http://localhost:7249";
export const BASE_URL = "https://localhost:7249/api";

export function translateStatusToErrorMessage(status: number) {
  switch (status) {
    case 401:
      return "Please login again.";
    case 403:
      return "You do not have permission to view the data requested.";
    default:
      return "There was an error retrieving the data. Please try again.";
  }
}

export function checkStatus(response: Response) {
  if (response.ok) return response;

  const httpError = {
    status: response.status,
    statusText: response.statusText,
    url: response.url,
  };
  console.log(`http error status: ${JSON.stringify(httpError)}`);

  let errorMessage = translateStatusToErrorMessage(httpError.status);
  throw new Error(errorMessage);
}

export function parseJSON(response: Response) {
  return response.json();
}

// eslint-disable-next-line
export function delay(ms: number) {
  return function (x: any): Promise<any> {
    return new Promise((resolve) => setTimeout(() => resolve(x), ms));
  };
}
