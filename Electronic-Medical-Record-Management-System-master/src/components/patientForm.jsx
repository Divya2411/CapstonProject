import React from "react";
import Joi from "joi-browser";
import { Link } from "react-router-dom";
import Form from "./common/form";
import _ from "lodash";
import { savePatient, getPatient } from "../services/patientsDB";
import { getDoctors } from "../services/doctorsDB";
import { getGenders } from "../services/gendersDB";
import { getNotes, saveNote } from "../services/medicalNotesDB";
import { getRecords, saveRecord } from "../services/patientsHistoryDB";

class PatientForm extends Form {
  state = {
    data: {
      id: "",
      healthID: "",
      firstName: "",
      lastName: "",
      genderID: "",
      DOB: "",
      email: "",
      phone: "",
      doctorID: "",
      healthDetails: "",
      addNote: "",
    },
    medical_notes: [],
    doctors: [],
    genders: [],
    errors: {},
  };

  schema = {
    id: Joi,
    healthID: Joi.string().min(10).max(10).required().label("Health ID"),
    registrationDate: Joi.string(),
    firstName: Joi.string().required().label("First name"),
    lastName: Joi.string().required().label("Last name"),
    genderID: Joi.required().label("Gender"),
    DOB: Joi.string().label("DOB"),
    email: Joi.string().label("Email"),
    phone: Joi.number()
      .integer()
      .min(2000000000)
      .max(9000000000)
      .label("Phone number"),
    doctorID: Joi.required().label("Doctor"),
    healthDetails: Joi.string()
      .min(1)
      .max(200)
      .required()
      .label("Patient health detail"),
    addNote: Joi,
  };

  async componentDidMount() {
    //read other state object
    const { data: allStaff } = await getDoctors();
    const doctors = this.showMedicalStaff(allStaff);
    const { data: genders } = await getGenders();
    this.setState({ doctors, genders });
    //set state for form
    const patientId = this.props.match.params.id;
    if (patientId === "new") return;
    const { data: patient } = await getPatient(patientId);
    if (!patient) return this.props.history.replace("/not-found");
    this.setState({ data: this.mapToViewMedel(patient[0]) });
    //map data for later use
    this.setState({ original: this.mapToDB(this.mapToViewMedel(patient[0])) });
    //get medical notes for data in the state
    const { data: medical_notes } = await getNotes(patientId);
    this.setState({ medical_notes });
    const { data: patient_history } = await getRecords(patientId);
    this.setState({ patient_history });
  }

  showMedicalStaff = (allStaff) => {
    const doctors = allStaff.filter(
      (d) => d.roleID === "R1" || d.roleID === "R2"
    );
    doctors.map((d) => (d.name = d.fname + " " + d.lname));
    return doctors;
  };

  mapToViewMedel(patient) {
    return {
      id: patient._id,
      healthID: patient.healthID,
      registrationDate: patient.regDate.slice(0, 10),
      firstName: patient.fname,
      lastName: patient.lname,
      genderID: patient.genderID,
      DOB: patient.DOB.slice(0, 10),
      email: patient.email,
      phone: patient.phone,
      doctorID: patient.doctorID,
      healthDetails: patient.healthDetails,
    };
  }

  doSubmit = () => {
    const { data, original } = this.state;
    savePatient(this.mapToDB(data));
    saveRecord(this.mapToDB(data), original);
    saveNote(this.constructNotes(data.addNote));
    const newData = { ...data };
    newData.addNote = "";
    this.setState({ data: newData });
    window.location.reload();
  };

  constructNotes(info) {
    const final = {
      patientID: this.props.match.params.id,
      doctorID: this.state.data.doctorID,
      date: new Date().toISOString().slice(0, 10),
      note: _.capitalize(info),
    };
    return final;
  }

  mapToDB(patientFromView) {
    const regDate = patientFromView.registrationDate
      ? patientFromView.registrationDate.slice(0, 10)
      : new Date().toISOString().slice(0, 10);
    return {
      _id: patientFromView.id,
      isArchieved: 0,
      healthID: patientFromView.healthID,
      regDate: regDate,
      DOB: patientFromView.DOB.slice(0, 10),
      fname: patientFromView.firstName,
      lname: patientFromView.lastName,
      genderID: patientFromView.genderID,
      email: patientFromView.email,
      phone: patientFromView.phone,
      doctorID: patientFromView.doctorID,
      healthDetails: _.capitalize(patientFromView.healthDetails),
    };
  }

  render() {
    const { match } = this.props;
    const {
      data,
      genders,
      doctors,
      medical_notes,
      patient_history,
    } = this.state;
    return (
      <React.Fragment>
        <div className="side-padding">
          <div className="row">
            <div className="col-9">
              <form className="side-padding" onSubmit={this.handleSubmit}>
                <h2>Patient: {match.params.id}</h2>
                <h4>Registerated Since: {data.registrationDate}</h4>
                <Link
                  to="/patients"
                  className="btn btn-warning"
                  style={{ marginTop: 20 }}
                >
                  GO BACK
                </Link>
                <div className="row">
                  {this.renderInput("healthID", "Health ID")}
                </div>
                <div className="row">
                  {this.renderInput("firstName", "First Name")}
                  {this.renderInput("lastName", "Last Name")}
                </div>
                <div className="row">
                  {this.renderSelect("genderID", "Gender", genders)}
                  {this.renderInput("DOB", "Date of Birth", "date")}
                </div>
                <div className="row">
                  {this.renderInput("phone", "Phone", "number")}
                  {this.renderInput("email", "Email", "email")}
                </div>
                <div className="row">
                  {this.renderSelect("doctorID", "Doctor", doctors)}
                </div>
                <div className="row">
                  {this.renderTextarea("healthDetails", "Health Details", 5)}
                </div>
                <div className="row">
                  {this.renderButton("Save", "primary")}
                </div>
                <div className="row">
                  {this.renderTextarea("addNote", "Add a medical note", 3)}
                </div>
                <div className="row">
                  {this.renderLists(
                    "medical_notes",
                    "medical notes",
                    `patient ${match.params.id}`,
                    medical_notes,
                    doctors
                  )}
                </div>
              </form>
            </div>
            <div className="col">
              {this.renderRecordLists(
                "patient_history",
                "change records",
                `${data.firstName}`,
                patient_history,
                doctors
              )}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PatientForm;
