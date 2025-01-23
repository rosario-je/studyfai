import React from 'react'
import { IoHomeOutline, IoBookOutline } from "react-icons/io5";
import { MdOutlineQuiz } from "react-icons/md";

import Sidebar, { SidebarItem } from '../ui/Sidebar.jsx'
const MainPageContainer = ({ children, expanded, setExpanded }) => {
    return (
        <div className="dashboard-container min-h-[calc(100vh-6rem)] flex mt-[6rem]">
            <Sidebar expanded={expanded} setExpanded={setExpanded}>
                <SidebarItem icon={<IoHomeOutline size={25} />} text="Home" />
                <SidebarItem icon={<IoBookOutline size={25} />} text="Notes" />
                <SidebarItem icon={<MdOutlineQuiz size={25} />} text="Quizzes" />
            </Sidebar>
            {children}
        </div>
    )
}

export default MainPageContainer