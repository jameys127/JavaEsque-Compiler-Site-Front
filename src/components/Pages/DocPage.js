import React, { useState } from 'react'
import SideBar from '../addons/SideBar'
import { createTheme, Divider, ThemeProvider } from '@mui/material'
import DocContentPage from '../addons/DocContentPage'

const DocPage = () => {
  const [markdown, setMarkdown] = useState('/introduction.md');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleClick = () => {
    setSidebarOpen(!sidebarOpen);
  }
  return (
    <div className='flex flex-col p-5 h-[88vh]'>
      <div className='self-start flex pb-3 cursor-pointer sm:hidden' onClick={handleClick}>
        <i className={sidebarOpen ? "fa-solid fa-times text-[1.5rem]" : "fa-solid fa-bars text-[1.5rem]"}></i>
      </div>
      <div className='flex h-full w-full min-h-0'>
        <div className={`fixed top-0 left-0 h-full border-r border-[#333] z-50 transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} sm:static sm:border-none sm:translate-x-0 sm:transition-none`}>
          <SideBar setMarkdown={setMarkdown} setSidebarOpen={setSidebarOpen}/>
        </div>
        <DocContentPage markdownPath={markdown} />
      </div>
    </div>
  )
}

export default DocPage
