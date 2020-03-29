import React from "react";

function EmployeeDetail(props) {
  return (
    <div className="text-center">
      <img alt={props.title} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />
      <h3>Employee: {props.employee}</h3>
      <h3>Employee Type: {props.pic}</h3>
      <h3>Released: {props.email}</h3>
    </div>
  );
}

export default EmployeeDetail;
