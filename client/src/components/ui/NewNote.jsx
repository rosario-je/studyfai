import React from 'react'

//Icons import
import { IoAddOutline } from "react-icons/io5";

//Modal import
import NoteOptionsModal from './NoteOptionsModal';

const NewNote = () => {
    return (
        <div className="new-note-item flex flex-col justify-center items-center w-52 h-72 border-[2px] border-gray-300 hover:border-gray-500 transition-all duration-200 border-dashed rounded-xl group" onClick={() => document.getElementById('my_modal_3').showModal()}>
            <NoteOptionsModal />
            <IoAddOutline className="text-4xl text-gray-300 group-hover:text-gray-500 transition-all duration-200" />
        </div>
    )
}

export default NewNote