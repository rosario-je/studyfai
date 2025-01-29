import React from 'react'

const DashboardNotes = () => {
    return (
        <div className='bg-white hover:bg-gray-100 hover:border border-gray-200 transition-colors w-[250px] h-[100%] flex-shrink-0 rounded-3xl p-6 items-center'>
            <h2 className='text-zinc-500 leading-tight text-xl font-bold pb-2 truncate'>Linked List Notes</h2>
            <p className='text-zinc-400 leading-tight text-base line-clamp-3'>These are the notes for the linked list notes that were summarized with studyFAI</p>
        </div>
    )
}

export default DashboardNotes