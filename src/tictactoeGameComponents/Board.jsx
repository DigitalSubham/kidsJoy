import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const handleClick = (index) => {
    if (state[index] !== null) {
      return;
    }
    const newState = [...state];
    newState[index] = isXTurn ? "X" : "O";
    setIsXTurn(!isXTurn);
    setState(newState);
  };

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return `${state[a]} won the game`;
      }
    }
    return false;
  };

  const isWinner = checkWinner();

  return (
    <div className="m-5 w-[50%]  mx-auto">
      {isWinner ? (
        <div className="flex">
          {isWinner ? (
            <h2 className="text-4xl">{isWinner} </h2>
          ) : (
            <h2 className="text-4xl">Tie </h2>
          )}
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={() => setState(Array(9).fill(null))}
          >
            Play Again
          </button>
        </div>
      ) : (
        <>
          <h3 className="text-2xl">Player {isXTurn ? "X" : "o"} Turn</h3>
          <div className="flex justify-evenly items-center">
            <Square onClick={() => handleClick(0)} value={state[0]} />
            <Square onClick={() => handleClick(1)} value={state[1]} />
            <Square onClick={() => handleClick(2)} value={state[2]} />
          </div>
          <div className="flex justify-evenly items-center">
            <Square onClick={() => handleClick(3)} value={state[3]} />
            <Square onClick={() => handleClick(4)} value={state[4]} />
            <Square onClick={() => handleClick(5)} value={state[5]} />
          </div>
          <div className="flex justify-evenly items-center">
            <Square onClick={() => handleClick(6)} value={state[6]} />
            <Square onClick={() => handleClick(7)} value={state[7]} />
            <Square onClick={() => handleClick(8)} value={state[8]} />
          </div>
        </>
      )}
    </div>
  );
};

export default Board;
