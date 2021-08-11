import React from "react";

function StatCard({ icon, heading, description }) {
  return (
    <div className="stat__card">
      <span className="stat__card--icon">
        <img src={icon} alt="card icon" />
      </span>

      <h3 className="heading heading--tertiary">{heading}</h3>
      <p className="desc desc--secondary">{description}</p>
    </div>
  );
}

export default StatCard;
