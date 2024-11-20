import { SignIn } from "@clerk/clerk-react";

const Signin = () => {
  return (
    <div className="signin-page w-screen h-screen flex items-center justify-center">
      <SignIn />
    </div>
  );
};

export default Signin;
