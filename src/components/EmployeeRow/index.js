import React from "react";
import "./style.css";

function EmployeeRow(props) {
  return (
    <tr>
      <th scope="row">{props.id}</th>
      <td>{props.name}</td>
      <td>{props.role}</td>
      <td>{props.department}</td>
      <td>${props.salary.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}</td>
      <button type="button" className="remove btn btn-danger btn-sm mt-2" onClick={() => props.deleteEmployee(props.id)}>Remove</button>
    </tr>
  );
}

export default EmployeeRow;
