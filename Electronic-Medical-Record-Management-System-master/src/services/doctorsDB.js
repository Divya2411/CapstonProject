import http from "./httpService";
import { apiUrl } from "../config.json";
const apiEndPoint = apiUrl + "/doctors";

function doctorUrl(id) {
  return `${apiEndPoint}/${id}`;
}

export function getDoctors() {
  return http.get(apiEndPoint);
}

export function getDoctor(doctorId) {
  return http.get(doctorUrl(doctorId));
}

export function deleteDoctor(doctorId) {
  return http.delete(doctorUrl(doctorId));
}

export function saveDoctor(doctor) {
  if (doctor._id) {
    console.log("put");
    const body = { ...doctor };
    delete body._id;
    return http.put(doctorUrl(doctor._id), body);
  }
  console.log("post");
  delete doctor._id;
  return http.post(apiEndPoint, doctor);
}

export default {
  getDoctors,
  getDoctor,
  deleteDoctor,
  saveDoctor,
};
