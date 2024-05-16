import React, { useState } from "react";
import Suggestion from "./Suggestion";

export interface SuggestionProps {
  username: string;
  message: string;
}

function Suggestions() {
  const [suggestions, setSuggestions] = useState([
    { username: "jsmith", message: "New to Instagram" },
    { username: "qjones", message: "Famous Dude" },
    { username: "qlatifah", message: "The Equalizer" },
    { username: "jtweedy", message: "Just a rocker dude" },
  ]);

  return (
    <div className="suggestions w-[350px] mt-[30px] ml-[50px] font-sans">
      <div className="suggestions__title flex flex-row justify-between mb-[10px] text-gray-500">
        <span>Suggested for you</span>
        <button className=" bg-transparent border-[0px] font-semibold text-black hover:cursor-pointer hover:text-gray-500">
          See all
        </button>
      </div>
      <div className="suggestions__users w-[100%] flex flex-col">
        {suggestions.map((suggestion: SuggestionProps) => (
          <Suggestion
            key={suggestion.username} // o/w, warning about needing unique key prop
            username={suggestion.username}
            message={suggestion.message}
          />
        ))}
      </div>
    </div>
  );
}

export default Suggestions;
