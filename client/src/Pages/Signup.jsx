import React from "react";
import { SignUp } from "@clerk/clerk-react";

const Signup = () => {
  return (
    <div className="signin-page w-screen h-screen flex items-center justify-center">
      <SignUp />
    </div>
  );
};

export default Signup;
