import React, { Component } from "react";
import { getPatients, deletePatient } from "../services/patientsDB";
import { getDoctors } from "../services/doctorsDB";
import PatientsTable from "./patientsTable";
import Pagination from "./common/pagination";
import SearchBox from "./common/searchBox";
import ListGroup from "./common/listGroup";
import { paginate } from "../utils/paginate";
import { Link } from "react-router-dom";
import _ from "lodash";

class Patients extends Component {
  state = {
    patients: [],
    doctors: [],
    currentPage: 1,
    pageSize: 4,
    selectedDoctor: null,
    sortColumn: { path: "title", order: "asc" },
    searchQuery: "",
  };

  async componentDidMount() {
    const { data: allStaff } = await getDoctors();
    const allDoctors = this.showMedicalStaff(allStaff);
    const doctors = [{ _id: "", name: "All Doctors" }, ...allDoctors];
    const { data: patients } = await getPatients();
    this.setState({ patients, doctors });
  }

  showMedicalStaff = (allStaff) => {
    const doctors = allStaff.filter(
      (d) => d.roleID === "R1" || d.roleID === "R2"
    );
    doctors.map((d) => (d.name = d.fname + " " + d.lname));
    return doctors;
  };

  handleDelete = async (patient) => {
    const originalList = this.state.patients;
    const patients = originalList.filter((m) => m._id !== patient._id);
    this.setState({ patients });
    try {
      await deletePatient(patient._id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        console.error("This patient has already been deleted.");
      }
      this.setState({ patients: originalList });
    }
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleDoctorSelect = (doctor) => {
    this.setState({ currentPage: 1, selectedDoctor: doctor, searchQuery: "" });
  };

  handleSort = (sortColumn) => {
    this.setState({
      sortColumn,
    });
  };

  handleSearch = (query) => {
    this.handleDoctorSelect(null);
    this.setState({
      searchQuery: query,
    });
  };

  getPageData = () => {
    const {
      pageSize,
      currentPage,
      selectedDoctor,
      patients: allPatients,
      sortColumn,
      searchQuery,
    } = this.state;
    const filtered =
      selectedDoctor && selectedDoctor._id
        ? allPatients.filter((p) => p.doctorID === selectedDoctor._id)
        : allPatients;
    const searched =
      searchQuery.length > 0
        ? allPatients.filter((p) => {
            return (
              p.healthID.includes(searchQuery) ||
              p.fname.toLowerCase().includes(searchQuery.toLowerCase()) ||
              p.lname.toLowerCase().includes(searchQuery.toLowerCase())
            );
          })
        : filtered;
    const sorted = _.orderBy(searched, [sortColumn.path], [sortColumn.order]);
    const patients = paginate(sorted, currentPage, pageSize);
    if (patients.length === 0 && currentPage > 0) {
      this.setState({ currentPage: currentPage - 1 });
    }
    return { totalCount: filtered.length, data: patients };
  };

  render() {
    const {
      pageSize,
      currentPage,
      selectedDoctor,
      doctors,
      sortColumn,
      searchQuery,
    } = this.state;

    const { totalCount, data: patients } = this.getPageData();

    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            data={doctors}
            selectedType={selectedDoctor}
            onItemSelect={this.handleDoctorSelect}
          />
        </div>
        <div className="col">
          <Link
            to="/patients/new"
            className="btn btn-primary"
            style={{ marginBottom: 20 }}
          >
            New Patient
          </Link>
          <p>Showing {totalCount} patients in the databases.</p>
          <SearchBox
            value={searchQuery}
            onChange={this.handleSearch}
            placeholder="Search by Health ID or Name"
          />
          <PatientsTable
            patients={patients}
            doctors={doctors}
            sortColumn={sortColumn}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Patients;
