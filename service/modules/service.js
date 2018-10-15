import axios from "axios";

import { API_URL } from "./constants";

export default class ApiService {
  constructor() {
    this.instance = axios.create();
  }

  get({ id, url, data }) {
    const serviceUrl = this.getEndpointUrl({ id, url });

    return this.instance({
      method: "get",
      url: serviceUrl,
      params: data
    })
      .then(response => {
        if (response.status === 200) {
          return response.data;
        } else {
          console.error(
            `Url: ${response.request.url}, Status: ${response.status} ${
              response.statusText
            }`
          );
        }
      })
      .catch(error => {
        console.error(`Url: ${serviceUrl}, Method: "GET", Error: ${error}`);
      });
  }

  post({ id, url, data }) {
    const serviceUrl = this.getEndpointUrl({ id, url });

    return axios({
      method: "post",
      url: serviceUrl,
      data: data
    })
      .then(response => {
        if (response.status === 200) {
          return response.data;
        } else {
          console.error(
            `Url: ${response.request.url}, Status: ${response.status} ${
              response.statusText
            }`
          );
        }
      })
      .catch(error => {
        console.error(`Url: ${serviceUrl}, Error: ${error}`);
      });
  }

  put({ id, url, data }) {
    const serviceUrl = this.getEndpointUrl({ id, url });

    return axios({
      method: "put",
      url: serviceUrl,
      data: data
    })
      .then(response => {
        if (response.status === 200) {
          return response.data;
        } else {
          console.error(
            `Url: ${response.request.url}, Status: ${response.status} ${
              response.statusText
            }`
          );
        }
      })
      .catch(error => {
        console.error(`Url: ${serviceUrl}, Error: ${error}`);
      });
  }

  delete({ id, url, data }) {
    const serviceUrl = this.getEndpointUrl({ id, url });

    return axios({
      method: "delete",
      url: serviceUrl,
      data: data
    })
      .then(response => {
        if (response.status === 200) {
          return response.data;
        } else {
          console.error(
            `Url: ${response.request.url}, Status: ${response.status} ${
              response.statusText
            }`
          );
        }
      })
      .catch(error => {
        console.error(`Url: ${serviceUrl}, Error: ${error}`);
      });
  }

  getServiceUrl() {
    return API_URL;
  }

  getEndpointUrl({ id, url }) {
    let serviceUrl = url || this.getServiceUrl();

    if (id) {
      serviceUrl = `${serviceUrl}/${id}`;
    }

    return serviceUrl;
  }
}
