import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import { useState } from "react";
//Components import
import Navbar from '../components/ui/Navbar.jsx'
import Sidebar, { SidebarItem } from '../components/ui/Sidebar.jsx'

import DashboardNotes from '../components/ui/DashboardNotes.jsx'

import { IoHomeOutline, IoBookOutline } from "react-icons/io5";
import { MdOutlineQuiz } from "react-icons/md";

const Dashboard = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <>
      <Navbar />
      <section className="dashboard-container min-h-[calc(100vh-6rem)] flex mt-[6rem]">
        <Sidebar expanded={expanded} setExpanded={setExpanded}>
          <SidebarItem icon={<IoHomeOutline size={25} />} text="Home" />
          <SidebarItem icon={<IoBookOutline size={25} />} text="Notes" />
          <SidebarItem icon={<MdOutlineQuiz size={25} />} text="Quizzes" />
        </Sidebar>
        {/* Main user dashboard container */}
        <div className={`main-dashboard-container flex flex-row gap-x-5 transition-all duration-200 px-6 h-full bg-blue p-6 ${expanded ? 'w-[calc(100vw-12vw)]' : 'w-[calc(100vw-5vw)]'
          }`}>

          <section className='user-data-container flex flex-col gap-y-[50px] w-[80%]'>
            <div className='welcome-message bg-blue-500 h-[20vh] border rounded-3xl p-6'>
              <h2 className='text-white text-5xl '>Welcome to StudyfAI</h2>
            </div>
            <div className='user-notes flex flex-nowrap gap-x-4 overflow-x-auto pb-4 px-2 -mx-2 w-full'>
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
            <div className='quiz-cards-container h-[calc(100vh-6rem-25vh-170px-100px)] flex gap-x-5'>
              <div className='quizzes-container w-full h-full bg-zinc-300 rounded-3xl'>

              </div>
              <div className='flashcards-container w-full h-full bg-zinc-300 rounded-3xl'>

              </div>
            </div>

          </section>
          <section className='w-[20%] h-auto'>
            <div className='h-full w-full bg-blue-400 rounded-3xl p-6'>
              <h2>this is the user</h2>
            </div>
          </section>

        </div>
      </section>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};

export default Dashboard;
