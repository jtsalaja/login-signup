import React from "react";
import Sidenav from "./navigation/Sidenav";
import Timeline from "./timeline/Timeline";
import "../css/style.css";

function Homepage() {
  return (
    <div className="homepage flex flex-row">
      <div className="homepage__nav flex-none w-1/5">
        <Sidenav />
      </div>
      <div className="homepage__timeline flex-grow w-4/5">
        <Timeline />
      </div>
    </div>
  );
}

export default Homepage;
