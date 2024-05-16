import React, { useState } from "react";
import "../../css/style.css";
import Suggestions from "../suggestions/Suggestions";
import Post from "./posts/Post";

// see https://youtu.be/SqcY0GlETPk?t=3148
export interface PostProps {
  user: string;
  image_url: string;
  image_alt: string;
  timestamp: string;
  likes: number;
}

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "tallinncity",
      image_url:
        "https://images.unsplash.com/photo-1592859600972-1b0834d83747?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      image_alt: "Nature, Estonia",
      likes: 1376,
      timestamp: "3h",
    },
    {
      user: "mathisfun",
      image_url:
        "https://plus.unsplash.com/premium_photo-1668592656577-cae7b4c5de73?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGFsbGlubnxlbnwwfHwwfHx8MA%3D%3D",
      image_alt: "Baltic Sea",
      likes: 1014,
      timestamp: "12h",
    },
    {
      user: "dogs_are_the_best",
      image_url:
        "https://images.unsplash.com/photo-1685177094118-2f5d753680cd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGVzdG9uaWElMjBzd2FtcHxlbnwwfHwwfHx8MA%3D%3D",
      image_alt: "Dog exploring Estonian Nature",
      likes: 122334,
      timestamp: "2d",
    },
  ]);

  return (
    <div className="timeline flex flex-row">
      <div className="timeline__left flex flex-col">
        <div className="timeline__posts">
          {posts.map((post: PostProps) => (
            <Post
              key={post.user} // o/w, warning that each child in list should have unique 'key' prop
              user={post.user}
              image_url={post.image_url}
              image_alt={post.image_alt}
              timestamp={post.timestamp}
              likes={post.likes}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right flex flex-col">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;
