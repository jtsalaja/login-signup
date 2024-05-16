import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { auth } from "./../firebase";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSignup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(
        signInWithEmailAndPassword(auth, email, password).then(
          updateProfile(auth.currentUser, { displayName: username })
        )
      )
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div className="signup flex flex-col border border-gray-500 p-12 ml-[30px] mr-[30px]">
      <img
        className=" w-52 ml-auto mr-auto mb-10"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1600px-Instagram_logo.svg.png"
        alt=""
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        className=" bg-[#ffffff24] border rounded-sm p-3 mb-[20px] text-black focus:outline  focus:outline-gray-500"
        type="email"
        placeholder="email"
        value={email}
      />

      <input
        onChange={(e) => setUsername(e.target.value)}
        className=" bg-[#ffffff24] border rounded-sm p-3 mb-[20px] text-black focus:outline  focus:outline-gray-500"
        type="text"
        placeholder="username"
        value={username}
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        className=" bg-[#ffffff24] border rounded-sm p-3 mb-[20px] text-black focus:outline  focus:outline-gray-500"
        type="password"
        placeholder="password"
        value={password}
      />
      <button
        onClick={handleSignup}
        className=" p-3 rounded-lg text-black border-0 bg-blue-500 font-semibold hover:cursor-pointer"
      >
        Sign up
      </button>
    </div>
  );
}

export default Signup;
