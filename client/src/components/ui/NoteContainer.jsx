import React from 'react'

const NoteContainer = ({ title }) => {
    return (
        <div className="note-item group flex flex-col justify-center items-center w-52 h-72 border-2 border-gray-300 hover:border-gray-500 transition-all duration-200 border-dashed rounded-xl">
            <h2 className="font-bold text-gray-300 group-hover:text-gray-500 transition-all duration-200">{title}</h2>
        </div>
    )
}

export default NoteContainer