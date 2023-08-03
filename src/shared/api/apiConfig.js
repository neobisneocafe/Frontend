import axios from "axios";

const apiConfig = {
  pythonApiBaseUrl: "http://134.122.78.162:8000",
  nodeJsApiBaseUrl: "https://neo-cafe-neobis-d301ec8e3f9a.herokuapp.com",
};

const basicAuthCredentials = {
  username: "552",
  password: "admin",
};

export const endpoints = {
  categoryList: `${apiConfig.pythonApiBaseUrl}/api/menu/menu-categories/`,
  branchList: `${apiConfig.nodeJsApiBaseUrl}/api/branch`,
  productList: `${apiConfig.pythonApiBaseUrl}/api/menu/products/`,
  dishList: `${apiConfig.pythonApiBaseUrl}/api/menu/menu-items/`
};


const instance = axios.create({
  baseURL: apiConfig.pythonApiBaseUrl,
  auth: basicAuthCredentials,
});

export default instance;