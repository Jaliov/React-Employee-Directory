import React from "react";
//import { getBsProps } from "react-bootstrap/lib/utils/bootstrapUtils";

function EmployeeDetail(props) {
  return (
    <tr className="text-center">
      <td><img src = {props.pic} alt = "employee photos"></img></td>
      <td>{props.name}</td>
      <td>Email: {props.email}</td>
    </tr>
  );
}

export default EmployeeDetail;
