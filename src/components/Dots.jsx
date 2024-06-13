import React from 'react';
import star from "../assets/Ellipse.svg"
const Dot = ({ left, top }) => {
  return (
    <img
      src={star}
      className="absolute opacity-50  z-0"
      style={{ left: `${left}%`, top: `${top}%` }}
      alt="dot"
    />
  );
};

export default Dot;