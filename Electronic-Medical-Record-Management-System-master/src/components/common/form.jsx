import React, { Component } from "react";
import Joi from "joi-browser";
import { Button } from "@material-ui/core";
import Input from "./input";
import Textarea from "./textarea";
import Select from "./select";
import Lists from "./lists"; //delete this from common in the future
import RecordLists from "./recordLists"; //delete this from common in the future

class Form extends Component {
  state = { data: {}, errors: {} };

  validate = () => {
    const option = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, option);
    const errors = {};
    if (!error) return null;
    error.details.map(
      (detail) =>
        (errors[detail.path[0]] = detail.message.replace(/"/g, "") + ".")
    );
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return !error === true
      ? null
      : error.details[0].message.replace(/"/g, "") + ".";
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  renderInput = (name, label, type = "text") => {
    const { data, errors } = this.state;
    return (
      <Input
        name={name}
        label={label}
        type={type}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  };

  renderSelect = (name, label, options) => {
    const { data, errors } = this.state;
    return (
      <Select
        name={name}
        value={data[name]}
        label={label}
        options={options}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  };

  renderLists = (name, label, thisLabel, value, options) => {
    return (
      <Lists
        name={name}
        options={options}
        thisLabel={thisLabel}
        value={value}
        label={label}
      />
    );
  };

  renderRecordLists = (name, label, thisLabel, value, options) => {
    return (
      <RecordLists
        name={name}
        options={options}
        thisLabel={thisLabel}
        value={value}
        label={label}
      />
    );
  };

  renderTextarea = (name, label, row) => {
    const { data, errors } = this.state;
    return (
      <Textarea
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
        row={row}
      />
    );
  };

  renderButton = (label, color) => {
    // console.log("submit", this.validate());
    return (
      <div className="m-3">
        <Button
          type="submit"
          disabled={this.validate() !== null}
          variant="contained"
          color={color}
        >
          {label}
        </Button>
      </div>
    );
  };
}

export default Form;
