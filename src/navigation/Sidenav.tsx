import React from "react";

// note how the imported name can be changed relative to the actual
// icon's name given by @mui (e.g., MoreIcon vs MenuOutlineIcon)
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/ExploreOutlined";
import ReelsIcon from "@mui/icons-material/SlideshowOutlined";
import MessagesIcon from "@mui/icons-material/SendOutlined";
import NotificationsIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CreateIcon from "@mui/icons-material/AddBoxOutlined";
import MoreIcon from "@mui/icons-material/MenuOutlined";
import { Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebase";
import { logout } from "../features/userSlice";
import { signOut } from "firebase/auth";

function Sidenav() {
  const user = useSelector((state) => state.data.user.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    signOut(auth);
  };
  let url =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1600px-Instagram_logo.svg.png";

  return (
    <div className="sidenav fixed flex flex-col justify-between z-[1]">
      <a href="https://www.instagram.com/" alt="link to Instagram">
        <img
          className="sidenav__logo w-[120px] m-6 hover:cursor-pointer"
          src={url}
          alt="instagram logo"
        />{" "}
      </a>

      <div className="sidenav__button-container flex flex-col">
        <button className="sidenav__button flex flex-row items-center bg-transparent border-none mt-[5px] mr-[10px] mb-[5px] ml-[10px] pt-[10px] pr-[15px] pb-[10px] pl-[15px] rounded-xl w-[100%] hover:cursor-pointer hover:bg-gray-300">
          {/* wrap the @mui icon in its own wrapper div so that the div size
              can remain fixed while the icon is resized on hover, without
              affecting the span's text within the button */}
          <div className="sidenav__icon-wrapper w-[30px] h-[30px]">
            <HomeIcon className="material-icons the-icon hover:text-[28px] hover:mt-0 hover:ml-0 hover:transition-all" />
          </div>
          <span className="text-[18px] font-normal ml-[10px] ">Home</span>
        </button>

        <button className="sidenav__button flex flex-row items-center bg-transparent border-none mt-[5px] mr-[10px] mb-[5px] ml-[10px] pt-[10px] pr-[15px] pb-[10px] pl-[15px] rounded-xl w-[100%] hover:cursor-pointer hover:bg-gray-300">
          <div className="sidenav__icon-wrapper w-[30px] h-[30px]">
            <SearchIcon className="material-icons the-icon hover:text-[28px] hover:mt-0 hover:ml-0 hover:transition-all " />
          </div>
          <span className="text-[18px] font-normal ml-[10px] ">Search</span>
        </button>

        <button className="sidenav__button sidenav__button flex flex-row items-center bg-transparent border-none mt-[5px] mr-[10px] mb-[5px] ml-[10px] pt-[10px] pr-[15px] pb-[10px] pl-[15px] rounded-xl w-[100%] hover:cursor-pointer hover:bg-gray-300">
          <div className="sidenav__icon-wrapper w-[30px] h-[30px]">
            <ExploreIcon className="material-icons the-icon hover:text-[28px] hover:mt-0 hover:ml-0 hover:transition-all" />
          </div>
          <span className="text-[18px] font-normal ml-[10px] ">Explore</span>
        </button>

        <button className="sidenav__button sidenav__button flex flex-row items-center bg-transparent border-none mt-[5px] mr-[10px] mb-[5px] ml-[10px] pt-[10px] pr-[15px] pb-[10px] pl-[15px] rounded-xl w-[100%] hover:cursor-pointer hover:bg-gray-300">
          <div className="sidenav__icon-wrapper w-[30px] h-[30px]">
            <ReelsIcon className="material-icons the-icon hover:text-[28px] hover:mt-0 hover:ml-0 hover:transition-all" />
          </div>
          <span className="text-[18px] font-normal ml-[10px] ">Reels</span>
        </button>

        <button className="sidenav__button sidenav__button flex flex-row items-center bg-transparent border-none mt-[5px] mr-[10px] mb-[5px] ml-[10px] pt-[10px] pr-[15px] pb-[10px] pl-[15px] rounded-xl w-[100%] hover:cursor-pointer hover:bg-gray-300">
          <div className="sidenav__icon-wrapper w-[30px] h-[30px]">
            <MessagesIcon
              className="material-icons the-icon hover:text-[28px] hover:mt-0 hover:ml-0 hover:transition-all transform rotate-[-30deg]"
              id="messages-icon"
            />
          </div>
          <span className="text-[18px] font-normal ml-[10px] ">Message</span>
        </button>

        <button className="sidenav__button sidenav__button flex flex-row items-center bg-transparent border-none mt-[5px] mr-[10px] mb-[5px] ml-[10px] pt-[10px] pr-[15px] pb-[10px] pl-[15px] rounded-xl w-[100%] hover:cursor-pointer hover:bg-gray-300">
          <div className="sidenav__icon-wrapper w-[30px] h-[30px]">
            <NotificationsIcon className="material-icons the-icon hover:text-[28px] hover:mt-0 hover:ml-0 hover:transition-all" />
          </div>
          <span className="text-[18px] font-normal ml-[10px] ">
            Notifications
          </span>
        </button>

        <button className="sidenav__button sidenav__button flex flex-row items-center bg-transparent border-none mt-[5px] mr-[10px] mb-[5px] ml-[10px] pt-[10px] pr-[15px] pb-[10px] pl-[15px] rounded-xl w-[100%] hover:cursor-pointer hover:bg-gray-300">
          <div className="sidenav__icon-wrapper w-[30px] h-[30px]">
            <CreateIcon className="material-icons the-icon hover:text-[28px] hover:mt-0 hover:ml-0 hover:transition-all " />
          </div>
          <span className="text-[18px] font-normal ml-[10px] ">Create</span>
        </button>

        <button className="sidenav__button sidenav__button flex flex-row items-center bg-transparent border-none mt-[5px] mr-[10px] mb-[5px] ml-[10px] pt-[10px] pr-[15px] pb-[10px] pl-[15px] rounded-xl w-[100%] hover:cursor-pointer hover:bg-gray-300">
          <div className="">
            <Avatar className="">
              {user.username ? user.username.charAt(0).toUpperCase() : "A"}
            </Avatar>
          </div>
          <span className="text-[18px] font-normal ml-[10px] ">
            {user.username}
            <button
              onClick={handleLogout}
              className="logout__button text-[15px] rounded-lg border-transparent font-bold bg-gray-300 p-[10px] hover:cursor-pointer"
            >
              Log out
            </button>
          </span>
        </button>
      </div>

      <div className="sidenav__more-container fixed bottom-[3px]">
        <button className="sidenav__button sidenav__button flex flex-row items-center bg-transparent border-none mt-[5px] mr-[10px] mb-[5px] ml-[10px] pt-[10px] pr-[15px] pb-[10px] pl-[15px] rounded-xl w-[100%] hover:cursor-pointer hover:bg-gray-300">
          <div className="sidenav__icon-wrapper w-[30px] h-[30px]">
            <MoreIcon className="material-icons the-icon hover:text-[28px] hover:mt-0 hover:ml-0 hover:transition-all" />
          </div>
          <span className="text-[18px] font-normal ml-[10px] ">More</span>
        </button>
      </div>
    </div>
  );
}

export default Sidenav;
