import React from "react";
const Textarea = ({ name, label, error, row, ...rest }) => {
  return (
    <div className="col-6 my-3">
      <label className="font-sm" htmlFor={name}>
        {label}
      </label>
      <textarea
        {...rest}
        className="form-control"
        aria-label="With textarea"
        name={name}
        rows={row}
        placeholder={label}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Textarea;
