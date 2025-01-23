import React from 'react'
import Navbar from '../components/ui/Navbar'
import MainPageContainer from '../components/layout/MainPageContainer'
import RightContainer from '../components/layout/RightContainer'
import { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const NotePage = () => {
  const [expanded, setExpanded] = useState(true)
  const [content, setContent] = useState('')
  const [plainText, setPlainText] = useState('')

  const modules = {
    toolbar: [
      [{ 'header': [false, 3, 2, 1] }],
      [{ 'font': [] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'align': [] }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['clean']
    ]
  }

  return (
    <>
      <Navbar />
      <MainPageContainer expanded={expanded} setExpanded={setExpanded}>
        <RightContainer expanded={expanded}>
          <section className='w-full h-[100%] overflow-y-hidden'>
            <div className="flex items-center gap-x-4 pb-6">
              <input
                type="text"
                defaultValue="Untitled document" 
                className="text-2xl font-bold bg-transparent border-b-2 border-transparent hover:border-gray-300 focus:border-blue-500 focus:outline-none px-2 py-1 transition-colors"
              />
            </div>
            <div className="h-full w-full">
              <div className="bg-white shadow-lg h-[calc(100vh-200px)]">
                <ReactQuill 
                  theme="snow"
                  value={content}
                  onChange={setContent}
                  modules={modules}
                  className='h-full'
                  placeholder='Start writing...'
                />
              </div>
            </div>
          </section>
        </RightContainer>
      </MainPageContainer>
    </>
  )
}
export default NotePage