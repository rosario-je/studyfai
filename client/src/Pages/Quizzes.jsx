//Redux imports
import { useSelector } from 'react-redux'

//Clerk imports
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

//Layout components
import MainPageContainer from '../components/layout/MainPageContainer.jsx'
import RightContainer from '../components/layout/RightContainer.jsx'

//Components import
import Navbar from '../components/ui/Navbar.jsx'

const Quizzes = () => {
  const expanded = useSelector((state) => state.sidebar.expanded)

  return (
    <>
      <SignedIn>
        <Navbar />
        <MainPageContainer>
          <RightContainer>
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
