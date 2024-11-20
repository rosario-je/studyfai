import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";


const Landing = () => {
  return (
    <div>
      <div>
        <h1>This is the clerk sign in</h1>
      </div>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      
    </div>
  )
}

export default Landing