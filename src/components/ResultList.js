import React from "react";

function ResultList(props) {
  return (
    <ul className="list-group">
      {props.results.map(results => (
        <li className="list-group-item" key={results.id}>
          <img alt={results.name} className="img-fluid" src={results.images.original.url} />
        </li>
      ))}
    </ul>
  );
}

export default ResultList;
