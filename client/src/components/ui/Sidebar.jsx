import { useContext, createContext, useState } from "react"

const SidebarContext = createContext()

import { UserButton, useUser } from "@clerk/clerk-react";


import { RiMenuUnfold3Fill } from "react-icons/ri";
import { RiMenuFold3Fill } from "react-icons/ri";



export default function Sidebar({ children, expanded, setExpanded }) {
  const { isSignedIn, user, isLoaded } = useUser()
  if (!isLoaded) {
    return null
  }
  // if (isSignedIn) {
  //   console.log(user)
  // }

  return (
    <aside className="hidden md:block h-[calc(100vh-6rem)]">
      <nav className={`h-full flex flex-col bg-white shadow-sm ${expanded ? "w-[12vw]" : "w-[5vw]"} transition-all duration-200`}>
        <div className={`p-4 pb-2 flex ${expanded ? "justify-between" : "justify-center"} items-center`}>
          <h2 className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"
            }`}>Menu</h2>
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <RiMenuUnfold3Fill /> : <RiMenuFold3Fill />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>
      </nav>
    </aside>
  )
}

export function SidebarItem({ icon, text, active, alert }) {
  const { expanded } = useContext(SidebarContext)

  return (
    <li
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group ${!expanded && "justify-center"}
        ${active
          ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
          : "hover:bg-indigo-50 text-gray-600"
        }
    `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"
          }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? "" : "top-2"
            }`}
        />
      )}

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </li>
  )
}