// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
// import { useState } from "react";
import Navbar from "../Components/Navbar";
import SectionA from "../Components/Landing/SectionA";

const Landing = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <SectionA />
    </div>
  );
};

export default Landing;

// <SignedOut>
//   <SignInButton />
// </SignedOut>
// <SignedIn>
//   <UserButton />
// </SignedIn>
