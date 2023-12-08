import React from "react";
import GamesCard from "./GamesCard";
import memoryCard from "../assets/memoryCard.png";
import tictactoe from "../assets/tictactoe.png";
import { Link } from "react-router-dom";

const Games = () => {
  const games = [
    { id: "memoryCard", name: `Memory Card`, src: memoryCard },
    { id: "ticTacToe", name: `Tic Tac Toe`, src: tictactoe },
    { name: `Ludo`, src: memoryCard },
    { name: `math`, src: tictactoe },
    { name: `alphabets`, src: memoryCard },
    { name: `Memory Card`, src: memoryCard },
    { name: `Tic Tac Toe`, src: tictactoe },
    { name: `Ludo`, src: memoryCard },
    { name: `math`, src: tictactoe },
    { name: `alphabets`, src: memoryCard },
    { name: `Memory Card`, src: memoryCard },
    { name: `Tic Tac Toe`, src: tictactoe },
  ];
  return (
    <div className="h-fit w-fit bg-gradient-to-r from-black via-gray-300 to-gray-500 md:pl-11 pl-20 ">
      <div className="flex flex-wrap     ">
        {games.map((game, index) => (
          <Link key={index} to={`/fungames/${game?.id}`}>
            <GamesCard game={game} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Games;
