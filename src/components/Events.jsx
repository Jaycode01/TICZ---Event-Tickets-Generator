import React from "react";
import "./styles/Events.css";

const Events = () => {
  return (
    <section>
      <div className="heading-and-progressbar">
        <div className="heading">
          <h1>Ticket Selection</h1>
          <p>Step 1/3</p>
        </div>
        <div className="progress-bar">
          <span className="progress-bar-fill"></span>
        </div>
      </div>
      <div className="event-details-container">
        <div className="detail-one">
          <h2>Techember Fest "25</h2>
          <p>
            Join us for an unforgettable experience at FusionTech Hack Fest"25!
            Secure your spot now.
          </p>
          <div className="location-and-date">
            <p>📍 Lagos, MainLand ||</p>
            <p>September 22, 2025 | 10:00 AM</p>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Events;
