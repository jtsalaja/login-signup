import React, { useState } from "react";
import "../../css/style.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password);
  };
  return (
    <div className="login flex flex-col border border-gray-500 p-12 ml-[30px] mr-[30px] ">
      <img
        className=" w-52 ml-auto mr-auto mb-10"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1600px-Instagram_logo.svg.png"
        alt=""
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        className=" bg-[#ffffff24] border rounded-sm p-3 mb-[20px] text-black focus:outline  focus:outline-gray-500"
        type="email"
        placeholder="Email"
        value={email}
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        className=" bg-[#ffffff24] border rounded-sm p-3 mb-[20px] text-black focus:outline  focus:outline-gray-500"
        type="password"
        placeholder="Password"
        value={password}
      />
      <button
        onClick={handleLogin}
        className=" p-3 rounded-lg text-black border-0 bg-blue-500 font-semibold hover:cursor-pointer"
      >
        Log in
      </button>
    </div>
  );
}

export default Login;
