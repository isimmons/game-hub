import axios, { type AxiosRequestConfig, AxiosError } from 'axios';

export type FetchResponse<T> = {
  count: number;
  next: string | null;
  results: T[];
};

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '650a01fbd48246caadb5cdbd15aa37f7',
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data)
      .catch((error: AxiosError) => {
        throw new Error(error.message);
      });
  };

  getBySlug = (slug: string) => {
    return axiosInstance
      .get<T>(`${this.endpoint}/${slug}`)
      .then((res) => res.data)
      .catch((error: AxiosError) => {
        throw new Error(error.message);
      });
  };

  getById = (id: number | string) => {
    return axiosInstance
      .get<T>(`${this.endpoint}/${id}`)
      .then((res) => res.data)
      .catch((error: AxiosError) => {
        throw new Error(error.message);
      });
  };
}

export default APIClient;
