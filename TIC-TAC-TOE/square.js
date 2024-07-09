// src/Square.js

import React from 'react';
import '.style.css'; // Import your CSS file

const Square = ({ value, onClick }) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
