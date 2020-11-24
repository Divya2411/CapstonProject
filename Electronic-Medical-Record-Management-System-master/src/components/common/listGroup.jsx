import React from "react";

const ListGroup = ({
  data,
  textProperty,
  valueProperty,
  selectedType,
  onItemSelect,
}) => {
  return (
    <ul className="list-group">
      {data.map((d) => (
        <li
          style={{ cursor: "pointer" }}
          onClick={() => {
            onItemSelect(d);
          }}
          key={d[valueProperty]}
          className={
            d === selectedType ? "list-group-item active" : "list-group-item"
          }
        >
          {d[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
