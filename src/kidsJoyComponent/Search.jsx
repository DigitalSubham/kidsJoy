import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const [searchGame, setSearchGame] = useState(null);
  console.log(searchGame);
  return (
    <div className="h-screen">
      <input
        placeholder="Search for a game"
        className="w-[80%] border border-black  mx-auto ml-24 mt-40 p-2 border-r-0 rounded-md rounded-r-none"
        onChange={(e) => setSearchGame(e.target.value)}
      />
      <button className="border border-black border-l-0 p-2 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-l-none rounded-md">
        {" "}
        Search
      </button>
    </div>
  );
};

export default Search;
