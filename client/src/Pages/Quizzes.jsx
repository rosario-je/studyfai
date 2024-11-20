import React from "react";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

const Quizzes = () => {
  return (
    <section>
      <SignedIn>
        <div>Quizzes</div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </section>
  );
};

export default Quizzes;
