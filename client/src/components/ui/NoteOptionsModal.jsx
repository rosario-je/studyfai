import React from 'react'
import { useNavigate } from 'react-router-dom'

const NoteOptionsModal = () => {
    const navigate = useNavigate()
    const handleCreateNote = () => {
        navigate('/notes')
    }
    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box h-[25%]">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h2 className="text-2xl font-bold text-center">Note Options:</h2>
                    <div className="flex justify-evenly items-center gap-4 h-[85%]">
                        <div>
                            <button className="btn btn-primary">Summarize Notes</button>
                        </div>
                        <div>
                            <button onClick={() => navigate('/notes/create')} className="btn btn-primary">Create Notes</button>
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default NoteOptionsModal