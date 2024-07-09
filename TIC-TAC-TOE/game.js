// src/Game.js

import React from 'react';
import Board from '.Board';
import '.style.css'; // Import your CSS file

const Game = () => {
  return (
    <div className="game">
      <h1>Tic Tac Toe</h1>
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        {/* Additional game info or reset button can be added here */}
      </div>
    </div>
  );
};

export default Game;
