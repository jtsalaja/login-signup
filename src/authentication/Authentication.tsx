import React, { useState } from "react";
import "../../css/style.css";
import Login from "./Login";
import Signup from "./Signup";

function Authentication() {
  const [active, setActive] = useState("login");

  const handleChange = () => {
    setActive(active === "login" ? "signup" : "login");
  };
  return (
    <div className="authentication flex flex-row items-center mt-0 mr-[50px] mb-0 ml-[50px]">
      <div className="auth__left text-center  flex-grow-0 flex-shrink-0 flex-basis-1/2">
        <img
          className=" w-[400px] mt-[40px]"
          src="https://i.imgur.com/P3Vm1Kq.png"
          alt=""
        />
      </div>
      <div className="auth__right w-1/2 ">
        {active === "login" ? <Login /> : <Signup />}{" "}
        {/*all of this is for login though we are doing sign up now*/}
        <div className="auth__more border-[1px] border-gray-500 scroll-pe-5 mr-[30px] ml-[30px] text-center mt-4">
          <span className="font-medium  text-sm">
            {active === "login" ? (
              <>
                Don't have an account?{" "}
                <button
                  onClick={handleChange}
                  className=" text-blue-500 font-semibold bottom-0 p-2 hover:cursor-pointer"
                >
                  Sign up
                </button>
              </>
            ) : (
              <>
                Have an account?{" "}
                <button
                  onClick={handleChange}
                  className=" text-blue-500 font-semibold bottom-0 hover:cursor-pointer"
                >
                  Log in
                </button>
              </>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Authentication;
