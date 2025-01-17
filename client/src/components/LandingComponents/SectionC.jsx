const SectionC = () => {
  return (
    <div className="relative isolate container pt-40 pb-32 lg:px-8">
      {/* Background  shape */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1%, 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>

      {/* Hero section Text */}
      <div className="mx-auto max-w-3xl py-10 sm:py-10 lg:py-2 font-primary">
        <div className="text-center">
          {/* App heading and subheading */}
          <h1 className="text-5xl font-semibold tracking-tight text-primaryTxt sm:text-5xl">
            Get started with studif<span>AI</span> today!
          </h1>
          <p className="mt-5 text-sm text-center font-medium text-gray-500 sm:text-base/5 tracking-tight px-10">
            Join a vibrant community of learners transforming their study habits
            with StudifAI. Effortlessly upload your notes, enhance them using
            AI, and create interactive quiz cards to boost your understanding.
            Study smarter, stay motivated, and achieve your academic goals with
            confidence!
          </p>

          {/* Get Started Btn */}
          <div className="mt-4 flex items-center justify-center gap-x-6">
            <a href="#" className="btn-primary">
              <h2 className="px-5 py-3">Get Started</h2>
            </a>
          </div>
        </div>
      </div>

      {/* Background blue shape */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-60"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1%, 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
    </div>
  );
};

export default SectionC;
