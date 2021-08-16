import React from "react";

function Button({ classname, children, type, onClick }) {
  return (
    <button
      type={type ? type : "button"}
      className={`btn ${classname ? classname : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
