import React from "react";
import Joi from "joi-browser";
import { Link } from "react-router-dom";
import Form from "./common/form";
import { saveDoctor, getDoctor } from "../services/doctorsDB";
import { getTeamRoles } from "../services/teamRolesDB";
import { getGenders } from "../services/gendersDB";

class DoctorForm extends Form {
  state = {
    data: {
      id: "",
      firstName: "",
      lastName: "",
      genderID: "",
      specialization: "",
      roleID: "",
      email: "",
      phone: "",
    },
    genders: [],
    roles: [],
    errors: {},
  };

  schema = {
    id: Joi,
    firstName: Joi.string().required().label("First name"),
    lastName: Joi.string().required().label("Last name"),
    genderID: Joi.required().label("Gender"),
    specialization: Joi.string().required().label("Specialization"),
    roleID: Joi.string().required().label("Role"),
    email: Joi.string().email().label("Email"),
    phone: Joi.number()
      .integer()
      .min(2000000000)
      .max(9000000000)
      .label("Phone number"),
    join_date: Joi.string().min(0),
  };

  async componentDidMount() {
    const { data: roles } = await getTeamRoles();
    const { data: genders } = await getGenders();
    this.setState({ roles, genders });
    const doctorId = this.props.match.params.id;
    if (doctorId === "new") return;
    const { data: doctor } = await getDoctor(doctorId);
    if (!doctor) return this.props.history.replace("/not-found");
    this.setState({ data: this.mapToViewMedel(doctor[0]) });
  }

  mapToViewMedel(doctor) {
    return {
      id: doctor._id,
      firstName: doctor.fname,
      lastName: doctor.lname,
      genderID: doctor.genderID,
      specialization: doctor.spec,
      roleID: doctor.roleID,
      email: doctor.email,
      phone: doctor.phone,
      join_date: doctor.join_date.slice(0, 10),
    };
  }

  doSubmit = () => {
    saveDoctor(this.mapToDB(this.state.data));
    window.location.reload();
  };

  mapToDB(doctorFromView) {
    const joinDate = doctorFromView.join_date
      ? doctorFromView.join_date.slice(0, 10)
      : new Date().toISOString().slice(0, 10);
    console.log(joinDate);
    return {
      _id: doctorFromView.id,
      isArchieved: 0,
      fname: doctorFromView.firstName,
      lname: doctorFromView.lastName,
      genderID: doctorFromView.genderID,
      email: doctorFromView.email,
      phone: doctorFromView.phone,
      join_date: joinDate,
      spec: doctorFromView.specialization,
      roleID: doctorFromView.roleID,
    };
  }

  render() {
    const { match } = this.props;
    const { join_date } = this.state.data;
    const { genders, roles } = this.state;
    return (
      <React.Fragment>
        <form className="container" onSubmit={this.handleSubmit}>
          <h2>Doctor ID: {match.params.id}</h2>
          <h4>Date Since: {join_date}</h4>
          <Link
            to="/doctors"
            className="btn btn-warning"
            style={{ marginTop: 20 }}
          >
            GO BACK
          </Link>
          <div className="row">
            {this.renderInput("firstName", "First Name")}
            {this.renderInput("lastName", "Last Name")}
          </div>
          <div className="row">
            {this.renderSelect("genderID", "Gender", genders)}
          </div>
          <div className="row">
            {this.renderInput("phone", "Phone", "number")}
            {this.renderInput("email", "Email", "email")}
          </div>
          <div className="row">
            {this.renderSelect("roleID", "Role", roles)}
            {this.renderInput("specialization", "Specialization")}
          </div>
          <div className="row">{this.renderButton("Save", "primary")}</div>
        </form>
      </React.Fragment>
    );
  }
}

export default DoctorForm;
