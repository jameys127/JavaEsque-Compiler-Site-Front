import React, { useState } from 'react'
import SideBar from '../addons/SideBar'
import { createTheme, Divider, ThemeProvider } from '@mui/material'
import DocContentPage from '../addons/DocContentPage'

const DocPage = () => {
  const [markdown, setMarkdown] = useState('/introduction.md');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className='flex flex-col p-5 h-[88vh]'>
      <div className='self-start flex sm:hidden'>
        <i>stuff</i>
      </div>
      <div className='flex h-full w-full'>
        <SideBar setMarkdown={setMarkdown}/>
        <DocContentPage markdownPath={markdown} />
      </div>
    </div>
  )
}

export default DocPage
