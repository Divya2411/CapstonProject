import http from "./httpService";
import { apiUrl } from "../config.json";
const apiEndPoint = apiUrl + "/teamRoles";

function teamUrl(id) {
  return `${apiEndPoint}/${id}`;
}

export function getTeamRoles() {
  return http.get(apiEndPoint);
}

export function getTeamRole(roleID) {
  return http.get(teamUrl(roleID));
}

export default {
  getTeamRoles,
  getTeamRole,
};
