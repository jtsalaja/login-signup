import React from "react";
import "../../../css/style.css";
import Avatar from "@mui/material/Avatar";
import MoreOptionsIcon from "@mui/icons-material/MoreHoriz";
import FavoritesIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChatIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/SendOutlined";
import BookmarkIcon from "@mui/icons-material/BookmarkBorderOutlined";

// https://fakerjs.dev/api/image.html#avatar
import { faker } from "@faker-js/faker";

// PostProps interface defined in Timeline.tsx
//function Post(props: PostProps) {
function Post({ user, image_url, image_alt, timestamp, likes }: PostProps) {
  return (
    <div className="post w-[40.625rem] mt-[1.875rem] mr-[2.5rem] mb-[3.125rem] ml-[2.5rem]">
      <div className="post__header flex flex-row justify-between items-center mb-[10px] font-sans">
        <div className="post__author hover:cursor-pointer flex flex-row items-center font-bold text-base">
          <Avatar className="material-icons the-avatar mr-2">
            <img src={faker.image.avatarLegacy()} />
          </Avatar>
          {user}
          <span className="text-gray-500 text-sm ml-1">• {timestamp}</span>
        </div>
        <div className="post__more hover:cursor-pointer">
          <MoreOptionsIcon />
        </div>
      </div>
      <div className="post__image">
        <img
          className="w-full rounded-md border border-gray-500"
          src={image_url}
          alt={image_alt}
        />
      </div>
      <div className="post__footer font-sans">
        <div className="post__footer-icons-container flex flex-row items-center justify-between">
          <div className="post__footer-main w-[120px] flex flex-row items-center justify-between">
            <FavoritesIcon className="material-icons post-icon text-[30px] hover:cursor-pointer hover:text-gray-500" />
            <ChatIcon className="material-icons post-icon text-[30px] hover:cursor-pointer hover:text-gray-500" />
            <ShareIcon
              className="material-icons post-icon text-[31px] rotate-[-35deg] -mt-[10px] hover:cursor-pointer hover:text-gray-500"
              id="send-icon"
            />
          </div>
          <div className="post__footer-save">
            <BookmarkIcon className="material-icons post-icon text-[30px] hover:cursor-pointer hover:text-gray-500" />
          </div>
        </div>
        <span className="post__footer-liked">{likes} likes</span>
      </div>
    </div>
  );
}

export default Post;
