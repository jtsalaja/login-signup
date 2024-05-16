import React from "react";
import Avatar from "@mui/material/Avatar";
import { faker } from "@faker-js/faker";

function Suggestion({ username, message }: SuggestionProps) {
  return (
    <div className="suggestions__one-user flex flex-row justify-between mb-[10px]">
      <div className="suggestions__avatar-and-username flex flex-row hover:cursor-pointer">
        <div className="suggestions__avatar mr-[10px]">
          <Avatar>
            <img src={faker.image.avatar()} />
          </Avatar>
        </div>
        <div className="suggestions__username-and-message flex flex-col">
          <span className="suggestions__username font-semibold">
            {username}
          </span>
          <span className="suggestions__message font-light text-sm">
            {message}
          </span>
        </div>
      </div>
      <button className="suggestions__follow-button bg-transparent border-[0px] text-blue-400 font-bold hover:cursor-pointer hover:text-gray-500">
        Follow
      </button>
    </div>
  );
}

export default Suggestion;
