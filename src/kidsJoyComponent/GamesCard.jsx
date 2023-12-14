const GamesCard = ({ game }) => {
  return (
    <div className="w-80 p-2 m-2  rounded-xl hover:scale-105 bg-pink-50 items-center">
      <img
        className="rounded-md w-80 h-44 items-center"
        src={game.src}
        alt={game.alt}
      />
      <h2 className="font-bold text-center text-2xl xl">{game.name}</h2>
    </div>
  );
};

export default GamesCard;
