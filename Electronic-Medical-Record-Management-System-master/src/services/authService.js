import jwtDecode from "jwt-decode";
import http from "./httpService";
import { apiUrl } from "../config.json";
const apiEndPoint = apiUrl + "/auth";
const tokenKey = "token";

http.setJwt(getJwt()); //send jwt to backend whenever we make a request. we can chagne the header setting in the httpService.js accordingly at time of developing the backend

export async function login(email, password) {
  const { data: jwt } = await http.post(apiEndPoint, {
    email,
    password,
  });
  localStorage.setItem(tokenKey, jwt);
}

// export function loginWithJwt(jwt) {
//   localStorage.setItem(tokenKey, jwt);
// }

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export default {
  login,
  logout,
  getCurrentUser,
};
