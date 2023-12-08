import React from "react";

const Square = (props) => {
  return (
    <div
      onClick={props.onClick}
      className="border-2 border-black border-solid	h-36 w-full flex justify-center items-center"
    >
      <h5>{props.value}</h5>
    </div>
  );
};

export default Square;
