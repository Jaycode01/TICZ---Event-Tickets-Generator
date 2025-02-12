import React from "react";
import { useState } from "react";
import "./styles/Events.css";

const Events = ({ step, setStep }) => {
  const [selected, setSelected] = useState(null);

  const handleClick = (index) => {
    setSelected(index);
  };

  return (
    <section>
      <div className="heading-and-progressbar">
        <div className="heading">
          <h1>Ticket Selection</h1>
          <p>Step {step}/3</p>
        </div>
        <div className="progress-bar">
          <span className="progress-bar-fill"></span>
        </div>
      </div>
      <div className="event-details-container">
        <div className="detail-one">
          <h2>Techember Fest "25</h2>
          <p className="event-description">
            Join us for an unforgettable experience at FusionTech Hack Fest"25!
            Secure your spot now.
          </p>
          <div className="location-and-date">
            <p>📍 Lagos, MainLand ||</p>
            <p>September 22, 2025 | 10:00 AM</p>
          </div>
        </div>
        <hr />
        <div>
          <h3>Select Ticket Type:</h3>
          <div className="ticket-type-container">
            <div
              className={`ticket-type-one ${selected === 1 ? "active" : ""}`}
              onClick={() => handleClick(1)}
            >
              <div className="ticket-name-and-sitleft">
                <p>regular access</p>
                <p>30 left</p>
              </div>
              <div className="ticket-cost">
                <p>FREE</p>
              </div>
            </div>
            <div
              className={`ticket-type-two ${selected === 2 ? "active" : ""}`}
              onClick={() => handleClick(2)}
            >
              <div className="ticket-name-and-sitleft">
                <p>VIP access</p>
                <p>50 left</p>
              </div>
              <div className="ticket-cost">
                <p>$150</p>
              </div>
            </div>
            <div
              className={`ticket-type-three ${selected === 3 ? "active" : ""}`}
              onClick={() => handleClick(3)}
            >
              <div className="ticket-name-and-sitleft">
                <p>VVIP access</p>
                <p>70 left</p>
              </div>
              <div className="ticket-cost">
                <p>$200</p>
              </div>
            </div>
          </div>
        </div>

        <div className="first-ending-process">
          <h4>Number of Tickets </h4>
          <div className="number-of-ticket-input">
            {/* <input type="text" id="NoOfTickets"/>
            <label htmlFor="NoOfTickets"><FaAngleDown /> */}

            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select>
            {/* </label> */}
          </div>
          <div className="decision-btns">
            <button>Cancel</button>
            <button onClick={() => setStep(2)}>Next</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
