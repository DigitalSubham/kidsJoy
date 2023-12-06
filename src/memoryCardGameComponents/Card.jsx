import React from "react";
import "./card.css";

const Card = ({ item, id, handleClick }) => {
  const itemClass = item.stat ? " active " + item.stat : "";
  return (
    <div
      onClick={() => handleClick(id)}
      className={`card ${itemClass} bg-white item-center flex justify-center rounded-lg rotate-180`}
    >
      <img
        className="scale-0 max-w-[80%] max-h-[80%]"
        src={item.img}
        alt={item.id}
      />
    </div>
  );
};

export default Card;
