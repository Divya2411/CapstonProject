import http from "./httpService";
import _ from "lodash";
import { apiUrl } from "../config.json";
const apiEndPoint = apiUrl + "/patients_history";

function singleUrl(id) {
  return `${apiEndPoint}/${id}`;
}

export function getRecords(recordID) {
  return http.get(singleUrl(recordID));
}

export function saveRecord(req, original) {
  if (!req._id) return null;
  if (_.isEqual(req, original)) return null;
  const diff = _.reduce(
    req,
    (result, value, key) => {
      return _.isEqual(value, original[key]) ? result : [key, ...result];
    },
    []
  );
  const template = {
    DOB: "date of birth",
    doctorID: "doctor",
    fname: "first name",
    genderID: "gender",
    healthDetails: "health details",
    healthID: "health ID",
    lname: "last name",
    email: "email",
    phone: "phone",
  };
  const diffConverted =
    diff.length === 0
      ? diff
      : diff.map((d) => {
          return template[d];
        });
  const final = {
    patientID: req._id,
    doctorID: req.doctorID,
    date: new Date().toISOString().slice(0, 10),
    record: _.toString(diffConverted),
  };
  return http.post(apiEndPoint, final);
}

export default {
  getRecords,
  saveRecord,
};
