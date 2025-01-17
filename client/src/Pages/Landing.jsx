// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
// import { useState } from "react";
import Header from "../components/LandingComponents/Header";
import SectionA from "../components/LandingComponents/SectionA";
import SectionB from "../components/LandingComponents/SectionB";
import SectionC from "../components/LandingComponents/SectionC";
import Footer from "../components/LandingComponents/Footer";

const Landing = () => {
  return (
    <div className="bg-white">
      <Header />
      <SectionA />
      <SectionB />
      <SectionC />
      <Footer />
    </div>
  );
};

export default Landing;
