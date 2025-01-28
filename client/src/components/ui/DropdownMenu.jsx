import React from 'react'

import { GoTriangleDown, GoTriangleUp } from "react-icons/go";


const DropdownMenu = ({ title, options, isOpen, onToggle }) => {
    return (
        <div className='dropdown-menu-container w-[20%] flex flex-col gap-y-2'>
            <details className="group" open={isOpen} onClick={(e) => {
                e.preventDefault();
                onToggle();
            }}>
                <summary className='border-[1px] border-gray-300 rounded-xl px-4 py-2 w-full cursor-pointer list-none'>
                    <h2 className='text-lg font-light flex justify-between items-center'>
                        {title}
                        <span className='transition-transform duration-300'>
                            <GoTriangleDown className='group-open:rotate-180' />
                        </span>
                    </h2>
                </summary>

                <div className='dropdown-menu-content mt-2 w-full bg-gray-100 flex flex-col items-start justify-evenly p-2 rounded-xl'>
                    {options.map((option, index) => (
                        <button key={index} className='w-full text-left hover:bg-gray-200 p-2 rounded-xl transition-colors'>{option}</button>
                    ))}
                </div>
            </details>
        </div>
    )
}

export default DropdownMenu