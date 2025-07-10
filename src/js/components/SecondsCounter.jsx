import React from "react";
import PropTypes from 'prop-types';

const SecondsCounter = ({ seconds }) => {
  const digits = String(seconds).padStart(6, "0").split("");

  return (
    <div className="bg-dark text-white d-flex justify-content-center align-items-center py-4">
      <div className="d-flex gap-2">
        <div className="digit-box d-flex justify-content-center align-items-center">
          <i className="far fa-clock fa-2x"></i>
        </div>
        {digits.map((digit, index) => (
          <div
            key={index}
            className="digit-box d-flex justify-content-center align-items-center"
          >
            <span className="fs-2">{digit}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

SecondsCounter.propTypes = {
  seconds: PropTypes.number.isRequired,
};

export default SecondsCounter;