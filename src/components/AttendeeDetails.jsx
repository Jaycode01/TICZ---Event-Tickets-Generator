import React from "react";
import "./styles/AttendeeDetails.css";
import { FaEnvelope } from "react-icons/fa";

const AttendeeDetails = () => {
  return (
    <section>
      <div className="heading-and-progressbar">
        <div className="heading">
          <h1>Attendee Details</h1>
          <p>Step 2/3</p>
        </div>
        <div className="progress-bar">
          <span className="progress-bar-fill"></span>
        </div>
      </div>

      {/* Form to get Attendee Details */}
      <div className="attendee-details-form">
        <div className="upload-image-container"></div>
        <div className="input-details-container">
          <form>
            <div>
              <label htmlFor="">Enter your name</label>
              <input type="text" name="" id="" className="name-input" />
            </div>
            <div>
              <label htmlFor="">Enter your email</label>
              <div className="email-input">
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="hello@avioflagos.io"
                />
              </div>
            </div>
            <div>
              <label htmlFor="">About the Project</label>
              <textarea name="" id=""></textarea>
            </div>
          </form>
        </div>
        <div className="second-decision-btns">
          <button>Back</button>
          <button>Next</button>
        </div>
      </div>
    </section>
  );
};

export default AttendeeDetails;
