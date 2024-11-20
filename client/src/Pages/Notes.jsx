//Clerk imports
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

const Notes = () => {
  return (
    <section>
      <SignedIn>
        <div>Notes</div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </section>
  );
};

export default Notes;
