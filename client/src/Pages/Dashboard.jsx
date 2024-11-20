import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
const Dashboard = () => {
  return (
    <>
      <SignedIn>
        <div>Dashboard</div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};

export default Dashboard;
