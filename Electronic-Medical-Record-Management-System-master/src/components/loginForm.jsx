import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import auth from "../services/authService";
import { Redirect } from "react-router-dom";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = async () => {
    try {
      const { username, password } = this.state.data;
      await auth.login(username, password);
      const { state } = this.props.location; //linked to protectedRoute <Redirect/>
      window.location = state ? state.from.pathname : "/patients";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    if (auth.getCurrentUser()) return <Redirect to="/patients" />;
    return (
      <div className="container text-center my-4 py-4">
        <img
          className="mb-4"
          src={require("../assets/2.png")}
          alt="..."
          width="72"
          height="72"
        />
        <h2>Please Login In</h2>
        <form className="my-4" onSubmit={this.handleSubmit}>
          <div className="w-100 d-flex justify-content-center">
            {this.renderInput("username", "Username")}
          </div>
          <div className="w-100 d-flex justify-content-center">
            {this.renderInput("password", "Password", "password")}
          </div>
          <div className="w-100 d-flex justify-content-center">
            {this.renderButton("Login", "primary")}
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
