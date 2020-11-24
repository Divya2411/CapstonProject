import http from "./httpService";
import { apiUrl } from "../config.json";
const apiEndPoint = apiUrl + "/patients";

function patientUrl(id) {
  return `${apiEndPoint}/${id}`;
}

export function getPatients() {
  return http.get(apiEndPoint);
}

export function getPatient(patientId) {
  return http.get(patientUrl(patientId));
}

export function deletePatient(patientId) {
  return http.delete(patientUrl(patientId));
}

export function savePatient(patient) {
  if (patient._id) {
    const body = { ...patient };
    delete body._id;
    return http.put(patientUrl(patient._id), body);
  }
  delete patient._id;
  return http.post(apiEndPoint, patient);
}

export default {
  getPatients,
  getPatient,
  deletePatient,
  savePatient,
};
