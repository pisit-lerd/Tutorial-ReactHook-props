import React, { useState } from "react";
import "./App.css";

export default function Cell(props) {
  const [showResults, setshowResults] = useState(false);

  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        setshowResults(!showResults);
        console.log(showResults);
      }}
      className="cell"
    >
      {showResults ? props.Result : "Click"}
    </div>
  );
}
