import React, { useState } from "react";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

//Layout components
import MainPageContainer from '../components/layout/MainPageContainer.jsx'
import RightContainer from '../components/layout/RightContainer.jsx'

//Components import
import Navbar from '../components/ui/Navbar.jsx'

const Quizzes = () => {
  const [expanded, setExpanded] = useState(true);
  return (
    <>
      <SignedIn>
        <Navbar />
        <MainPageContainer expanded={expanded} setExpanded={setExpanded}>
          <RightContainer expanded={expanded}>
            <div>Quizzes</div>
          </RightContainer>
        </MainPageContainer>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};

export default Quizzes;
