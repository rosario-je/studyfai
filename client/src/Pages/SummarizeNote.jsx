import React, { useState, useCallback } from 'react'

//Redux imports
import { useSelector, useDispatch } from 'react-redux'
import { setSelectedSummarizationOptions } from '../redux/noteOptionsSlice'

//Layout components
import MainPageContainer from '../components/layout/MainPageContainer.jsx'
import RightContainer from '../components/layout/RightContainer.jsx'

//Components
import Navbar from '../components/ui/Navbar.jsx'
import { useDropzone } from 'react-dropzone'
import DropdownMenu from '../components/ui/DropdownMenu.jsx'

//Icons
import { MdOutlineUploadFile } from "react-icons/md";

// Set the worker source

const SummarizeNote = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const summarizationOptions = useSelector((state) => state.noteOptions.selectedSummarizationOptions)
  const dispatch = useDispatch()

  console.log('this is the selected summarization options', summarizationOptions)

  const [files, setFiles] = useState(null)
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const fileInputRef = React.useRef(null);

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0 && !files) {
      const file = acceptedFiles[0];
      setFiles([{
        ...file,
        preview: URL.createObjectURL(file)
      }]);
    }
  }, [files]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
    },
    maxFiles: 1,
    disabled: !!files,
  });
  console.log('this is the file', files)

  const handleToggle = (title) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };

  return (
    <MainPageContainer>
      <RightContainer>
        <Navbar />
        <section className='w-full h-full flex flex-col'>
          {/* Note Summarization Title Container */}
          <div className='note-summarization-title-container pb-6'>
            <h1 className='text-2xl font-bold'>Summarize your notes</h1>
            <h3 className='text-[15px] text-gray-500'>Upload your note to get a summary of your note with the summarization options of your choice</h3>
          </div>

          {/* Conditional rendering of upload area or file preview */}
          {files && files.length > 0 ? (
            // File Preview
            <div className="w-full h-full flex flex-col">
              <div className="flex-grow border rounded-lg overflow-hidden shadow-md transition-all duration-300 ease-in-out">
                {files.map((file) => (
                  <div key={file.name} className='h-full'>
                    <embed
                      src={file.preview}
                      type="application/pdf"
                      width="100%"
                      height="100%"
                      className="bg-white"
                    />
                    <p>Unable to display PDF file. Please download to view.</p>
                  </div>
                ))}
              </div>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                accept=".pdf,.docx"
                onChange={(e) => {
                  if (e.target.files?.[0]) {
                    const file = e.target.files[0];
                    setFiles([{
                      ...file,
                      preview: URL.createObjectURL(file)
                    }]);
                  }
                }}
              />
              <button
                onClick={() => setFiles(null)}
                className="self-center mt-4 px-4 py-2 w-[30%] bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <MdOutlineUploadFile className="text-xl" />
                Upload Different File
              </button>
            </div>
          ) : (
            // Upload Area
            <div
              className={`dropzone-area w-full h-[400px] border-2 border-dashed rounded-3xl 
                ${isDragActive ? 'border-gray-500' : 'border-gray-300'} 
                transition-all duration-300 ease-in-out 
                flex flex-col justify-center items-center p-6`}
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              <div className='flex flex-col justify-center items-center'>
                <MdOutlineUploadFile className='text-8xl text-gray-500' />
                {isDragActive ?
                  <p>Drop the files here ...</p> :
                  <p><span className='font-bold underline'>Click to upload</span> or drag and drop</p>
                }
                <p className='text-sm text-gray-500'>Supported file types: PDF, DOCX</p>
              </div>
            </div>
          )}

          {/* Summary Options Button Container */}
          <section className={`w-full flex flex-col items-center pt-6 ${files && files.length > 0 ? 'h-[45%]' : 'h-full'}`}>
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
                  onSelect={(option) => {
                    const newOptions = { ...summarizationOptions, summarizationLength: option };
                    dispatch(setSelectedSummarizationOptions(newOptions));
                  }}
                />
                <DropdownMenu
                  title="Area of focus"
                  options={["General overview", "Keypoints", "Detailed analysis"]}
                  isOpen={openDropdown === "Area of focus"}
                  onToggle={() => handleToggle("Area of focus")}
                  onSelect={(option) => {
                    const newOptions = { ...summarizationOptions, areaOfFocus: option };
                    dispatch(setSelectedSummarizationOptions(newOptions));
                  }}
                />
                <DropdownMenu
                  title="Document type"
                  options={["Academic paper", "General notes", "Technical report"]}
                  isOpen={openDropdown === "Document type"}
                  onToggle={() => handleToggle("Document type")}
                  onSelect={(option) => {
                    const newOptions = { ...summarizationOptions, documentType: option };
                    dispatch(setSelectedSummarizationOptions(newOptions));
                  }}
                />
                <DropdownMenu
                  title="Tone"
                  options={["Professional", "Academic", "Casual", "Simplified"]}
                  isOpen={openDropdown === "Tone"}
                  onToggle={() => handleToggle("Tone")}
                  onSelect={(option) => {
                    const newOptions = { ...summarizationOptions, tone: option };
                    dispatch(setSelectedSummarizationOptions(newOptions));
                  }}
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