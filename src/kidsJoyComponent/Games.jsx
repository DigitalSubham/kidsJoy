import React from "react";
import GamesCard from "./GamesCard";
import memoryCard from "../assets/memoryCard.png";
import tictactoe from "../assets/tictactoe.png";
import snakeGame from "../assets/snakeGame.png";
import flappyBird from "../assets/flappyBird.png";
import canduCrush from "../assets/canduCrush.png";
import bubbleShooter from "../assets/bubbleShooter.png";
import carRace from "../assets/carRace.png";
import chess from "../assets/chess.png";
import subwaySurfer from "../assets/subwaySurfer.png";
import { Link } from "react-router-dom";

const Games = () => {
  const games = [
    {
      id: "memoryCard",
      name: `Memory Card`,
      src: memoryCard,
      alt: "memoryCard",
    },
    { id: "ticTacToe", name: `Tic Tac Toe`, src: tictactoe, alt: "ticTacToe" },
    { name: `Snake`, src: snakeGame, alt: "snake" },
    { name: `Flappy Bird`, src: flappyBird, alt: "flappyBird" },
    { name: `Candy Crush`, src: canduCrush, alt: "candyCrush" },
    {
      name: `Bubble Shooter Coming Soon`,
      src: bubbleShooter,
      alt: "bubbleShooter",
    },
    { name: `Car Race Coming Soon`, src: carRace, alt: "carRace" },
    { name: `Chess Coming Soon`, src: chess, alt: "chess" },
    {
      name: `Subway Surfer Coming Soon`,
      src: subwaySurfer,
      alt: "subwaySurfer",
    },
  ];
  return (
    <div className="h-fit w-fit bg-gradient-to-r from-black via-gray-300 to-gray-500 md:pl-11 pl-20 ">
      <div className="flex flex-wrap ">
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
