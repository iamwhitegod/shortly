import React from "react";

function StatCaption({ heading, description }) {
  return (
    <div className="stat__caption">
      <h2 className="heading heading--secondary">{heading}</h2>
      <p className="desc desc--secondary">{description}</p>
    </div>
  );
}

export default StatCaption;
