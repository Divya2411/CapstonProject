import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="col-3 my-3">
      <label className="font-sm" htmlFor={name}>
        {label}
      </label>
      <input {...rest} id={name} name={name} className="form-control" />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;