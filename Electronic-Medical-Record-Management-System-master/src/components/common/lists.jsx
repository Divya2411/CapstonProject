import React from "react";

const Lists = ({ value, label, thisLabel, options }) => {
  const getList = (someID) => {
    const list = options.filter((op) => op._id === someID)[0];
    return list.name;
  };

  if (!value)
    return (
      <div className="col-8 my-3">
        <p className="border-bottom">
          There is no {label} for {thisLabel}.
        </p>
      </div>
    );

  return (
    <div className="col-8 my-3">
      <p className="border-bottom">
        There are {value.length} {label} for {thisLabel}.
      </p>
      <ul className="list-group">
        {value.map((v) => (
          <li key={v._id} className="list-group-item">
            <div className="d-flex w-100 justify-content-between">
              <h6 className="mb-1">{getList(v.doctorID)}</h6>
              <small>{v.date.slice(0, 10)}</small>
            </div>
            <p className="mb-1">{v.note}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Lists;
