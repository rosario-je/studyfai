//Redux imports
import { useSelector } from 'react-redux'

//Clerk imports
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

//Layout components
import MainPageContainer from '../components/layout/MainPageContainer.jsx'
import RightContainer from '../components/layout/RightContainer.jsx'

//Components import
import Navbar from '../components/ui/Navbar.jsx'
import NoteContainer from '../components/ui/NoteContainer.jsx'
import NewNote from '../components/ui/NewNote.jsx'


const Notes = () => {
  const expanded = useSelector((state) => state.sidebar.expanded)
  return (
    <>
      <SignedIn>
        <Navbar />
        <MainPageContainer>
          <RightContainer>
            <section className="notes-container w-full h-full overflow-y-auto">
              <h1 className={`text-2xl font-bold pb-5 fixed bg-gray-100 z-10 
                ${expanded
                  ? "md:w-[84vw] lg:w-[86vw] xl:w-[90vw]"
                  : "md:w-[95vw] lg:w-[96vw] xl:w-[97vw]"
                } px-4 pt-4`}>
                Notes
              </h1>
              <div className="notes-list flex flex-wrap justify-start items-center gap-4 w-full mt-[5rem]">
                <NewNote />
                <NoteContainer title="Note 1" />
                <NoteContainer title="Note 2" />
                <NoteContainer title="Note 3" />
                <NoteContainer title="Note 4" />
                <NoteContainer title="Note 5" />
                <NoteContainer title="Note 5" />
                <NoteContainer title="Note 5" />
                <NoteContainer title="Note 5" />
                <NoteContainer title="Note 5" />
                <NoteContainer title="Note 5" />
              </div>
            </section>
          </RightContainer>
        </MainPageContainer>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};

export default Notes;
