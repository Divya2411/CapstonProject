import http from "./httpService";
import { apiUrl } from "../config.json";
const apiEndPoint = apiUrl + "/medical_notes";

function singleUrl(id) {
  return `${apiEndPoint}/${id}`;
}

export function getNotes(patientID) {
  return http.get(singleUrl(patientID));
}

export function saveNote(req) {
  if (req.note && req.note.length > 0) return http.post(apiEndPoint, req);
  return null;
}

export default {
  getNotes,
  saveNote,
};
