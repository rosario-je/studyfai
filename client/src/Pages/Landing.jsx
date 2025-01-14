// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
// import { useState } from "react";
import Navbar from "../Components/Header";
import SectionA from "../Components/Landing/SectionA";
import SectionB from "../Components/Landing/SectionB";
import SectionC from "../Components/Landing/SectionC";
import Footer from "../Components/Landing/Footer";

const Landing = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <SectionA />
      <SectionB />
      <SectionC />
      <Footer />
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
