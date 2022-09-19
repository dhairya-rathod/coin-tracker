import axios from 'axios';

const endpoint = import.meta.env.VITE_API_URL;

const config = {
  headers: {
    'Content-Type': 'application/json'
  },
  method: 'PUT,DELETE,POST,PATCH,GET,OPTION'
};

/**
 * It takes a url and params, and returns a GET request to the url with the params and the apiConfig
 * @param url - The url of the API endpoint.
 * @param params - params,
 * @returns A promise
 */
export const getApi = (url: string, params?: object) => {
  return axios.get(`${endpoint}${url}`, {
    params: params,
    ...config
  });
};

/**
 * It takes in a URL, data, and a flag, and returns a promise
 * @param url - The url of the API endpoint
 * @param apiData - The data you want to send to the API.
 * @param flag - This is a boolean value
 * @returns A promise
 */
export const postApi = (url: string, apiData: object) => {
  return axios.post(`${endpoint}${url}`, apiData, config);
};

/**
 * It takes a URL, data, and a flag, and returns a promise
 * @param url - The url of the API endpoint
 * @param apiData - The data that you want to send to the API.
 * @param flag - This is a boolean value
 * @returns A promise
 */
export const putApi = (url: string, apiData: object) => {
  return axios.put(`${endpoint}${url}`, apiData, config);
};

export const patchApi = (url: string, apiData: object) => {
  return axios.patch(`${endpoint}${url}`, apiData, config);
};

export const deleteApi = (url: string) => {
  return axios.delete(`${endpoint}${url}`, config);
};

export const deleteApiWithData = (url: string, apiData: object) => {
  return axios.delete(`${endpoint}${url}`, {
    data: apiData,
    ...config
  });
};

/**
 * It intercepts all responses from the server and if the response is a 401, it clears the local
 * storage
 */
export const setupInterceptors = () => {
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response && [401].includes(error.response.status)) {
        // Error message
      }
      return Promise.reject(error);
    }
  );
};
