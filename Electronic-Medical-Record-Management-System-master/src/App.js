import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LoginForm from "./components/loginForm";
import Logout from "./components/logout";
import auth from "./services/authService";
import NotFound from "./components/notFound";
import PatientForm from "./components/patientForm";
import Patients from "./components/patients";
import DoctorForm from "./components/doctorForm";
import Doctors from "./components/doctors";
import NavBar from "./components/navBar";
import ProtectedRoute from "./components/common/protectedRoute";
import "./App.css";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <NavBar user={user} />
        <main className="side-padding">
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <ProtectedRoute path="/patients/:id" component={PatientForm} />
            <ProtectedRoute path="/patients" component={Patients} />
            <ProtectedRoute path="/doctors/:id" component={DoctorForm} />
            <ProtectedRoute path="/doctors" component={Doctors} />;
            <Route path="/not-found" component={NotFound} />
            <Redirect exact from="/" to="/login" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
