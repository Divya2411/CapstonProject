import React from "react";

const Lists = ({ value, label, thisLabel, options }) => {
  const getList = (someID) => {
    const list = options.filter((op) => op._id === someID)[0];
    return list.name;
  };
  if (!value)
    return (
      <div className="mb-1 my-3 border-bottom">
        <p>
          There is no {label} for {thisLabel}.
        </p>
      </div>
    );
  if (value.length > 20) value.length = 20;
  return (
    <div className="my-3">
      <p className="border-bottom">
        There are {value.length} {label} for {thisLabel}.
      </p>
      <ul className="list-group">
        {value.map((v) => (
          <li key={v._id} className="list-group-item">
            <div className="w-100">
              <small>
                {thisLabel}’s {v.record} changed on {v.date.slice(0, 10)} by{" "}
                {getList(v.doctorID)}
              </small>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Lists;
