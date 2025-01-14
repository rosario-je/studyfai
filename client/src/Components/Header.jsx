import { useState } from "react";
import { useNavigate } from "react-router";

import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

// Icons
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Features", href: "#" },
  { name: "About", href: "#" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const Navigate = useNavigate();

  return (
    <header className=" sticky inset-x-0 top-0 z-50 backdrop-blur-3xl">
      {/* Main Navbar */}
      <nav
        aria-label="Global"
        className="container flex items-center justify-between p-6 lg:px-8"
      >
        {/* Navbar Logo */}
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <h1>
              Studyf<strong>AI</strong>
            </h1>
          </a>
        </div>

        {/* Mobile navbar hamburger menu icon*/}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        {/* Desktop nav items */}
        <div className="hidden lg:flex lg:gap-x-12 items-center">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm/6 font-semibold text-gray-900"
            >
              {item.name}
            </a>
          ))}
          {/* Desktop login and sign up buttons */}
          <SignedOut>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-x-2">
              <a
                href="#"
                className="btn-secondary"
                onClick={() => Navigate("/login")}
              >
                <h2 className="px-5 py-1">Log in</h2>
              </a>
              <a
                href="#"
                className="btn-primary"
                onClick={() => Navigate("/signup")}
              >
                <h2 className="px-5 py-1">Sign up</h2>
              </a>
            </div>
          </SignedOut>
          <SignedIn>
            <div>
              <UserButton />
            </div>
          </SignedIn>
        </div>
      </nav>

      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            {/* StudyfAI Logo Mobile view */}
            <a href="#" className="-m-1.5 p-1.5">
              <h1>
                Studyf<strong>AI</strong>
              </h1>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <SignedOut>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  onClick={() => Navigate("/login")}
                >
                  Log in
                </a>
              </SignedOut>
              <SignedIn>
                <UserButton
                  appearance={{
                    userButton: {
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%",
                    },
                  }}
                />
              </SignedIn>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Header;
