import { SignedIn, SignedOut, RedirectToSignIn, useUser } from "@clerk/clerk-react";
import { useState } from "react";
//Components import
import Navbar from '../components/ui/Navbar.jsx'
import Sidebar, { SidebarItem } from '../components/ui/Sidebar.jsx'

import DashboardNotes from '../components/ui/DashboardNotes.jsx'

import { IoHomeOutline, IoBookOutline } from "react-icons/io5";
import { MdOutlineQuiz } from "react-icons/md";

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
        <section className="dashboard-container min-h-[calc(100vh-6rem)] flex mt-[6rem]">
          <Sidebar expanded={expanded} setExpanded={setExpanded}>
            <SidebarItem icon={<IoHomeOutline size={25} />} text="Home" />
            <SidebarItem icon={<IoBookOutline size={25} />} text="Notes" />
            <SidebarItem icon={<MdOutlineQuiz size={25} />} text="Quizzes" />
          </Sidebar>
          {/* Main user dashboard container */}
          <div className={`main-dashboard-container flex flex-col-reverse items-center w-full md:flex-row md:items-stretch justify-center gap-x-5 transition-all duration-200 px-6 h-full bg-blue p-6 ${expanded ? 'md:w-[calc(100vw-12vw)]' : 'md:w-[calc(100vw-5vw)]'
            }`}>

            <section className='user-data-container flex flex-col gap-y-[50px] w-full md:w-[80%] pt-5 md:pt-0'>
              {/* User welcome message */}
              <div className='welcome-message bg-blue-500 h-[20vh] border rounded-3xl p-6'>
                <h2 className='text-white text-5xl '>Welcome to StudyfAI</h2>
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
                  <h2 className='text-zinc-500 leading-tight text-4xl font-bold pb-2 '>Quizzes</h2>
                  <div className='quiz-user-data-container flex flex-row gap-x-5 flex-1'>
                    <div className='bg-blue-500 w-full h-full rounded-2xl'>

                    </div>
                    <div className='bg-blue-500 w-full h-full rounded-2xl'>

                    </div>
                  </div>
                </div>

                {/* Flashcards */}
                <div className='quizzes-container w-full h-full bg-zinc-100 border-[1px] border-zinc-400 rounded-3xl p-6 flex flex-col'>
                  <h2 className='text-zinc-500 leading-tight text-4xl font-bold pb-2 '>Flashcards</h2>
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
            <section className='md:w-[20%] h-auto  bg-zinc-100 rounded-3xl p-6'>
              {/* User avatar */}
              <div className='user-img-name-container w-full flex flex-col items-center'>
                {user && (

                  <div>
                    <img src={user && user.imageUrl} alt={`This is ${user.fullName} profile picture`} className='rounded-full w-[90%] pb-4' />
                    <h2 className='font-bold pb-2 text-xl text-zinc-500'>Hello {user.firstName}</h2>
                    <p className='text-center leading-tight text-[15px] text-zinc-500'>Continue your learning journey today!</p>
                  </div>
                )

                }
              </div>

              {/* User statistics */}
              <div className='user-statistics flex flex-col '>
                <h2 className='leading-tight font-xl text-zinc-500 '>Statistics this week</h2>

              </div>
            </section>

          </div>
        </section>
      </SignedIn>

      <SignedOut>
        {<RedirectToSignIn />}
      </SignedOut>
    </>
  );
};

export default Dashboard;
