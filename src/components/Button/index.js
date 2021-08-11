import React from "react";

function Button({ classname, children, type }) {
  return (
    <button
      type={type ? type : "button"}
      className={`btn ${classname ? classname : ""}`}
    >
      {children}
    </button>
  );
}

export default Button;
