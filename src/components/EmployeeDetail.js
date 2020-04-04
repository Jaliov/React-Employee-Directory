import React from "react";

function EmployeeDetail(props) {
  return (
    <tr className="text-center">
      <td> Thumbnail: {props.thumbnail}</td>
      <td>Employee: {props.name}</td>
      <td>Email: {props.email}</td>
    </tr>
  );
}

export default EmployeeDetail;
