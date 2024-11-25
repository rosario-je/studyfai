import FeaturesBox from "./FeaturesBox";

function SectionB() {
  return (
    <div className="relative isolate container py-40 lg:px-8">
      {/* Background  shape */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>

      {/* Hero section Text */}
      <div className="mx-auto  py-10 sm:py-10 lg:py-2 font-primary flex justify-between">
        {/* Feature box */}
        <FeaturesBox
          subtitle="Summarize study material"
          title="Condense your material effortlessly with AI."
          description={
            <p>
              Upload your study material and use <strong>AI</strong> to create
              concise summaries, highlighting the most important points. Perfect
              for reviewing key concepts quickly and efficiently.
            </p>
          }
        />
        <FeaturesBox
          subtitle="Optimize notes"
          title="Enhance your notes for effective studying."
          description={
            <p>
              Transform your study notes with <strong>AI</strong> enhancements,
              improving clarity and structure to make studying easier and more
              effective. Great for refining your material and boosting your
              understanding.
            </p>
          }
        />
        <FeaturesBox
          subtitle="Quiz yourself"
          title="Generate quiz cards to test your knowledge."
          description="Instantly generate quiz cards from your notes to test your knowledge and deepen your understanding of the material. A simple way to reinforce what you've learned and prepare for exams."
        />
      </div>

      {/* Background blue shape */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-60"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
    </div>
  );
}

export default SectionB;
