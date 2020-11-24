import React, { Component } from "react";
import { getDoctors, deleteDoctor } from "../services/doctorsDB";
import { getTeamRoles } from "../services/teamRolesDB";
import DoctorsTable from "./doctorsTable";
import Pagination from "./common/pagination";
import SearchBox from "./common/searchBox";
import ListGroup from "./common/listGroup";
import { paginate } from "../utils/paginate";
import { Link } from "react-router-dom";
import _ from "lodash";

class Doctors extends Component {
  state = {
    doctors: [],
    roles: [],
    currentPage: 1,
    pageSize: 4,
    selectedRole: null,
    sortColumn: { path: "title", order: "asc" },
    searchQuery: "",
  };

  async componentDidMount() {
    const { data: allRoles } = await getTeamRoles();
    const roles = [{ _id: "", name: "All Members" }, ...allRoles];
    const { data: doctors } = await getDoctors();
    this.setState({ doctors, roles });
  }

  handleDelete = async (doctor) => {
    const originalList = this.state.doctors;
    const doctors = originalList.filter((m) => m._id !== doctor._id);
    this.setState({ doctors });
    try {
      await deleteDoctor(doctor._id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        console.error("This doctor has already been deleted.");
      }
      this.setState({ doctors: originalList });
    }
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleRoleSelect = (role) => {
    this.setState({ currentPage: 1, selectedRole: role, searchQuery: "" });
  };

  handleSort = (sortColumn) => {
    this.setState({
      sortColumn,
    });
  };

  handleSearch = (query) => {
    this.handleRoleSelect(null);
    this.setState({
      searchQuery: query,
    });
  };

  getPageData = () => {
    const {
      pageSize,
      currentPage,
      selectedRole,
      doctors: allDoctors,
      sortColumn,
      searchQuery,
    } = this.state;
    const filtered =
      selectedRole && selectedRole._id
        ? allDoctors.filter((d) => d.roleID === selectedRole._id)
        : allDoctors;
    const searched =
      searchQuery.length > 0
        ? allDoctors.filter((d) => {
            return (
              d.fname.toLowerCase().includes(searchQuery.toLowerCase()) ||
              d.lname.toLowerCase().includes(searchQuery.toLowerCase())
            );
          })
        : filtered;
    const sorted = _.orderBy(searched, [sortColumn.path], [sortColumn.order]);
    const doctors = paginate(sorted, currentPage, pageSize);
    if (doctors.length === 0 && currentPage > 0) {
      this.setState({ currentPage: currentPage - 1 });
    }
    return { totalCount: filtered.length, data: doctors };
  };

  render() {
    const {
      pageSize,
      currentPage,
      selectedRole,
      roles,
      sortColumn,
      searchQuery,
    } = this.state;

    const { totalCount, data: doctors } = this.getPageData();

    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            data={roles}
            selectedType={selectedRole}
            onItemSelect={this.handleRoleSelect}
          />
        </div>
        <div className="col">
          <Link
            to="/doctors/new"
            className="btn btn-primary"
            style={{ marginBottom: 20 }}
          >
            New Doctor
          </Link>
          <p>Showing {totalCount} doctors in the databases.</p>
          <SearchBox
            value={searchQuery}
            onChange={this.handleSearch}
            placeholder="Search by Name"
          />
          <DoctorsTable
            doctors={doctors}
            roles={roles}
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

export default Doctors;
