import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table from "./common/table";
import auth from "../services/authService";

class DoctorsTable extends Component {
  columns = [
    {
      path: "_id",
      label: "Doctor ID",
      content: (doctor) => (
        <Link to={"/doctors/" + doctor._id}>{doctor._id}</Link>
      ),
    },
    {
      path: "roleID",
      label: "Role",
      content: (doctor) => {
        const result = this.props.roles.filter(
          (r) => r._id === doctor.roleID
        )[0];
        return result.name;
      },
    },
    { path: "fname", label: "First Name" },
    { path: "lname", label: "Last Name" },
  ];

  deleteColumn = {
    path: "delete",
    content: (doctor) => (
      <button
        onClick={() => this.props.onDelete(doctor)}
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
    const { doctors, sortColumn, onSort } = this.props;
    return (
      <Table
        sortColumn={sortColumn}
        onSort={onSort}
        data={doctors}
        columns={this.columns}
      />
    );
  }
}

export default DoctorsTable;
