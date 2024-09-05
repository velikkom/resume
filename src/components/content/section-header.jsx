import React from "react";
import "./section-header.css";

const SectionHeader = (props) => {
  return (
    <div className="section-header">
      <h2>{props.title}</h2>
      {props.children}
    </div>
  );
};

export default SectionHeader;
