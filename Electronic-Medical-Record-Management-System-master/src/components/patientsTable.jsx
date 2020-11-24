import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table from "./common/table";
import auth from "../services/authService";

class PatientsTable extends Component {
  columns = [
    {
      path: "_id",
      label: "Health ID",
      content: (patient) => (
        <Link to={"/patients/" + patient._id}>{patient.healthID}</Link>
      ),
    },
    {
      path: "doctorID",
      label: "Doctor",
      content: (patient) => {
        const result = this.props.doctors.filter(
          (d) => d._id === patient.doctorID
        )[0];
        if (!result) return <span class="text-danger">Need A Doctor ...</span>;
        return result.name;
      },
    },
    { path: "fname", label: "First Name" },
    { path: "lname", label: "Last Name" },
  ];

  deleteColumn = {
    path: "delete",
    content: (patient) => (
      <button
        onClick={() => this.props.onDelete(patient)}
        className="btn btn-danger bth-sm"
      >
        Delete
      </button>
    ),
  };

  constructor() {
    super();
    const user = auth.getCurrentUser();
    if (user && user.isAdmin) this.columns.push(this.deleteColumn);
  }

  render() {
    const { patients, sortColumn, onSort } = this.props;
    return (
      <Table
        sortColumn={sortColumn}
        onSort={onSort}
        data={patients}
        columns={this.columns}
      />
    );
  }
}

export default PatientsTable;
