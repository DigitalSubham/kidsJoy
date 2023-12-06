import React from "react";
import { useState } from "react";
import Card from "./Card";

const Cards = () => {
  const [items, setItems] = useState(
    [
      {
        id: 1,
        img: "https://honestgamer560559905.files.wordpress.com/2019/09/pokemon-pikachu-wall-decal.jpg?w=1000",
        stat: "",
      },
      {
        id: 1,
        img: "https://honestgamer560559905.files.wordpress.com/2019/09/pokemon-pikachu-wall-decal.jpg?w=1000",
        stat: "",
      },
      {
        id: 2,
        img: "https://i.redd.it/blue-lock-characters-as-pokemon-because-why-not-v0-sqswrtog5sda1.png?width=1200&format=png&auto=webp&s=7f48e54512ab57ba3f25c9b87ed9bff8cbe60cc1",
        stat: "",
      },
      {
        id: 2,
        img: "https://i.redd.it/blue-lock-characters-as-pokemon-because-why-not-v0-sqswrtog5sda1.png?width=1200&format=png&auto=webp&s=7f48e54512ab57ba3f25c9b87ed9bff8cbe60cc1",
        stat: "",
      },
      {
        id: 3,
        img: "https://i.insider.com/57910997dd0895a56e8b456d?width=600&format=jpeg&auto=webp",
        stat: "",
      },
      {
        id: 3,
        img: "https://i.insider.com/57910997dd0895a56e8b456d?width=600&format=jpeg&auto=webp",
        stat: "",
      },
      {
        id: 4,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr9lmR_Xd75t9zQchOIAFFfgAlXK5T-vo7nk-RvCVUQV71T2L56v0FZx7-H_rpcy8mvUM&usqp=CAU",
        stat: "",
      },
      {
        id: 4,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr9lmR_Xd75t9zQchOIAFFfgAlXK5T-vo7nk-RvCVUQV71T2L56v0FZx7-H_rpcy8mvUM&usqp=CAU",
        stat: "",
      },
      {
        id: 5,
        img: "https://i.insider.com/57910997dd0895a56e8b4570?width=600&format=jpeg&auto=webp",
        stat: "",
      },
      {
        id: 5,
        img: "https://i.insider.com/57910997dd0895a56e8b4570?width=600&format=jpeg&auto=webp",
        stat: "",
      },
      {
        id: 6,
        img: "https://i.insider.com/57910997dd0895a56e8b4573?width=600&format=jpeg&auto=webp",
        stat: "",
      },
      {
        id: 6,
        img: "https://i.insider.com/57910997dd0895a56e8b4573?width=600&format=jpeg&auto=webp",
        stat: "",
      },
      {
        id: 7,
        img: "https://comicvine.gamespot.com/a/uploads/square_small/11/114183/4357645-250px-149dragonite.jpg",
        stat: "",
      },
      {
        id: 7,
        img: "https://comicvine.gamespot.com/a/uploads/square_small/11/114183/4357645-250px-149dragonite.jpg",
        stat: "",
      },
      {
        id: 8,
        img: "https://www.giantbomb.com/a/uploads/scale_small/13/135472/1892132-010caterpie.png",
        stat: "",
      },
      {
        id: 8,
        img: "https://www.giantbomb.com/a/uploads/scale_small/13/135472/1892132-010caterpie.png",
        stat: "",
      },
    ].sort(() => Math.random() - 0.5)
  );
  const [prev, setPrev] = useState(-1);
  const [score, setScore] = useState(0);

  function check(current) {
    if (items[current].id == items[prev].id) {
      items[current].stat = "correct";
      items[prev].stat = "correct";
      setItems([...items]);
      setPrev(-1);
      setScore(score + 1);
    } else {
      items[current].stat = "wrong";
      items[prev].stat = "wrong";
      setItems([...items]);
      setTimeout(() => {
        items[current].stat = "";
        items[prev].stat = "";
        setItems([...items]);
        setPrev(-1);
      }, 1000);
      setPrev(-1);
    }
  }

  function handleClick(id) {
    if (prev === -1) {
      items[id].stat = "active";
      setItems([...items]);
      setPrev(id);
    } else {
      if (prev === id) {
        return alert("Please select another item");
      } else {
        check(id);
      }
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="text-center">
        <h1 className="text-red-500 text-2xl">Memory Game - React </h1>
        <div>
          <h2 className="text-white">Score: {score}</h2>
          <div className="h-[700px] w-[700px]   grid grid-cols-4 grid-rows-4	gap-[1em] ">
            {items.map((item, index) => (
              <Card
                key={index}
                id={index}
                handleClick={handleClick}
                item={item}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
