//Clerk imports
import { useState } from "react";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
//Layout components
import MainPageContainer from '../components/layout/MainPageContainer.jsx'
import RightContainer from '../components/layout/RightContainer.jsx'

//Components import
import Navbar from '../components/ui/Navbar.jsx'
import NoteContainer from '../components/ui/NoteContainer.jsx'
import NewNote from '../components/ui/NewNote.jsx'
const Notes = () => {
  const [expanded, setExpanded] = useState(true);
  return (
    <>
      <SignedIn>
        <Navbar />
        <MainPageContainer expanded={expanded} setExpanded={setExpanded}>
          <RightContainer expanded={expanded}>
            <section className="notes-container w-full h-full">
              <h1 className="text-2xl font-bold pb-5">Notes</h1>
              <div className="notes-list flex flex-wrap justify-start items-center gap-4 w-full">
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
