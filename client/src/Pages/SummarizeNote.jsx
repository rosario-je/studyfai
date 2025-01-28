import React, { useState } from 'react'

//Layout components
import MainPageContainer from '../components/layout/MainPageContainer.jsx'
import RightContainer from '../components/layout/RightContainer.jsx'

//Components
import Navbar from '../components/ui/Navbar.jsx'
import { useDropzone } from 'react-dropzone'
import DropdownMenu from '../components/ui/DropdownMenu.jsx'

//Icons
import { MdOutlineUploadFile } from "react-icons/md";



const SummarizeNote = () => {
  const [expanded, setExpanded] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop: (acceptedFiles) => console.log(acceptedFiles) })
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleToggle = (title) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };

  return (
    <MainPageContainer expanded={expanded} setExpanded={setExpanded}>
      <RightContainer expanded={expanded}>
        <Navbar />
        <section className='w-full h-full flex flex-col'>

          {/* File Dropzone Area */}
          <div className='note-summarization-title-container pb-6'>
            <h1 className='text-2xl font-bold'>Summarize your notes</h1>
            <h3 className='text-[15px] text-gray-500'>Upload your note to get a summary of your note with the summarization options of your choice</h3>
          </div>
          <div className={`dropzone-area w-full h-[30%] border-2 border-dashed rounded-3xl ${isDragActive ? 'border-gray-500' : 'border-gray-300'} transition-colors flex flex-col justify-center items-center p-6`} {...getRootProps()}>
            <input {...getInputProps()} />
            <div className='flex flex-col justify-center items-center'>
              <MdOutlineUploadFile className='text-8xl text-gray-500' />
              {isDragActive ? <p>Drop the files here ...</p> : <p><span className='font-bold underline'>Click to upload</span> or drag and drop</p>}
              <p className='text-sm text-gray-500'>Supported file types: PDF, DOCX</p>
            </div>
          </div>

          {/* Summary Options Button Container */}
          <section className='w-full h-full flex flex-col items-center pt-6'>
            {openDropdown && (
              <div
                className="fixed inset-0 z-10"
                onClick={() => setOpenDropdown(null)}
              />
            )}
            <div className='w-full h-full flex flex-col items-center'>
              <span className='text-2xl font-bold pb-6'>Choose your summarization options</span>

              <div className='summary-options-btn-container flex w-full max-h-[250px] h-full justify-evenly gap-x-2 relative z-20'>
                <DropdownMenu
                  title="Summarization length"
                  options={["Short", "Medium", "Long"]}
                  isOpen={openDropdown === "Summarization length"}
                  onToggle={() => handleToggle("Summarization length")}
                />
                <DropdownMenu
                  title="Area of focus"
                  options={["General overview", "Keypoints", "Detailed analysis"]}
                  isOpen={openDropdown === "Area of focus"}
                  onToggle={() => handleToggle("Area of focus")}
                />
                <DropdownMenu
                  title="Document type"
                  options={["Academic paper", "General notes", "Technical report"]}
                  isOpen={openDropdown === "Document type"}
                  onToggle={() => handleToggle("Document type")}
                />
                <DropdownMenu
                  title="Tone"
                  options={["Professional", "Academic", "Casual", "Simplified"]}
                  isOpen={openDropdown === "Tone"}
                  onToggle={() => handleToggle("Tone")}
                />
              </div>
            </div>
            <button className='bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600 transition-colors mb-6'>
              <h3 className='text-2xl font-medium'>Summarize file</h3>
            </button>
          </section>


        </section>

      </RightContainer>
    </MainPageContainer>
  )
}

export default SummarizeNote