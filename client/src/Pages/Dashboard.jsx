import { SignedIn, SignedOut, RedirectToSignIn, useUser } from "@clerk/clerk-react";
import { useState } from "react";

//Layout components
import MainPageContainer from '../components/layout/MainPageContainer.jsx'
import RightContainer from '../components/layout/RightContainer.jsx'

//Components import
import Navbar from '../components/ui/Navbar.jsx'
import DashboardNotes from '../components/ui/DashboardNotes.jsx'
import UserStatsBarChart from '../components/ui/UserStatsBarChart.jsx'

const Dashboard = () => {
  const [expanded, setExpanded] = useState(true);
  const { isLoaded, user, isSignedIn } = useUser()

  if (!isLoaded) {
    return null
  }

  return (
    <>
      <SignedIn>
        <Navbar />
        <MainPageContainer expanded={expanded} setExpanded={setExpanded}>
          <RightContainer expanded={expanded}>
            <section className='user-data-container flex flex-col gap-y-[50px] w-full md:w-[70%] pt-5 md:pt-0'>
              {/* User welcome message */}
              <div className='welcome-message bg-blue-500 h-[15vh] md:h-[20vh] border rounded-3xl p-6'>
                <h2 className='text-white text-3xl md:text-5xl '>Welcome to StudyfAI</h2>
              </div>

              {/* User notes */}
              <div className='user-notes relative'>
                <div className='flex flex-nowrap gap-x-4 overflow-x-auto pb-4 px-2 -mx-2 w-full'>
                  <div className='flex flex-nowrap gap-x-4'>
                    <DashboardNotes />
                    <DashboardNotes />
                    <DashboardNotes />
                    <DashboardNotes />
                    <DashboardNotes />
                    <DashboardNotes />
                    <DashboardNotes />
                    <DashboardNotes />
                    <DashboardNotes />
                  </div>
                </div>
              </div>

              {/* Quizz and flashcard containers */}
              <div className='quiz-cards-container h-[calc(100vh-6rem-25vh-170px-100px)] flex flex-col md:flex-row gap-y-5 md:gap-x-5'>

                {/* Quizzes */}
                <div className='quizzes-container w-full h-full bg-zinc-100 border-[1px] border-zinc-400 rounded-3xl p-6 flex flex-col'>
                  <h2 className='text-zinc-500 leading-tight text-xl md:text-4xl font-bold pb-2 '>Quizzes</h2>
                  <div className='quiz-user-data-container flex flex-row gap-x-5 flex-1'>
                    <div className='bg-blue-500 w-full h-full rounded-2xl'>

                    </div>
                    <div className='bg-blue-500 w-full h-full rounded-2xl'>

                    </div>
                  </div>
                </div>

                {/* Flashcards */}
                <div className='quizzes-container w-full h-full bg-zinc-100 border-[1px] border-zinc-400 rounded-3xl p-6 flex flex-col'>
                  <h2 className='text-zinc-500 leading-tight text-xl md:text-4xl font-bold pb-2 '>Flashcards</h2>
                  <div className='quiz-user-data-container flex flex-col gap-y-5 flex-1'>
                    <div className='bg-blue-500 w-full h-full rounded-2xl'>

                    </div>
                    <div className='bg-blue-500 w-full h-full rounded-2xl'>

                    </div>
                    <div className='bg-blue-500 w-full h-full rounded-2xl'>

                    </div>
                  </div>

                </div>
              </div>

            </section>

            {/* User container */}
            <section className='flex flex-col items-center justify-between md:w-[30%] h-auto  bg-zinc-100 rounded-3xl p-6'>
              {/* User avatar */}
              <div className='user-img-name-container w-full flex flex-col items-center'>
                {user && (

                  <div className='flex flex-col items-center'>
                    <img src={user && user.imageUrl} alt={`This is ${user.fullName} profile picture`} className='dashboard-user-img rounded-full w-[30%] md:w-[50%] pb-4' />
                    <h2 className='font-bold pb-2 text-xl text-zinc-500'>Hello {user.firstName}</h2>
                    <p className='text-center leading-tight text-[15px] text-zinc-500'>Continue your learning journey today!</p>
                  </div>
                )

                }
              </div>

              {/* User statistics */}
              <div className='user-statistics flex flex-col h-2/3 w-full justify-end'>
                <h2 className='leading-tight font-xl text-zinc-500 font-bold text-3xl text-center pt-5'>Statistics this week</h2>
                <UserStatsBarChart title="Flashcards created:" />
                <UserStatsBarChart title="Notes Summarized:" />
                <UserStatsBarChart title="Quizzes done:" />
              </div>
            </section>

          </RightContainer>
        </MainPageContainer>
      </SignedIn>

      <SignedOut>
        {<RedirectToSignIn />}
      </SignedOut>
    </>
  );
};

export default Dashboard;
