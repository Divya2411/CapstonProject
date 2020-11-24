import http from "./httpService";
import { apiUrl } from "../config.json";
const apiEndPoint = apiUrl + "/genders";

function genderUrl(id) {
  return `${apiEndPoint}/${id}`;
}

export function getGenders() {
  return http.get(apiEndPoint);
}

export function getGender(genderID) {
  return http.get(genderUrl(genderID));
}

export default {
  getGenders,
  genderUrl,
};
