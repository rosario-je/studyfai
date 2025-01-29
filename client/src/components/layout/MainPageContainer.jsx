import React from 'react'
import { IoHomeOutline, IoBookOutline } from "react-icons/io5";
import { MdOutlineQuiz } from "react-icons/md";

import Sidebar, { SidebarItem } from '../ui/Sidebar.jsx'
const MainPageContainer = ({ children }) => {
    return (
        <div className="dashboard-container h-[calc(100vh-85px)] flex mt-[80px] overflow-hidden bg-zinc-100">
            <Sidebar>
                <SidebarItem icon={<IoHomeOutline size={25} />} text="Home" />
                <SidebarItem icon={<IoBookOutline size={25} />} text="Notes" />
                <SidebarItem icon={<MdOutlineQuiz size={25} />} text="Quizzes" />
            </Sidebar>
            {children}
        </div>
    )
}

export default MainPageContainer