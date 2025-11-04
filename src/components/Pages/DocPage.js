import React, { useState } from 'react'
import SideBar from '../addons/SideBar'
import { createTheme, Divider, ThemeProvider } from '@mui/material'
import DocContentPage from '../addons/DocContentPage'

const DocPage = () => {
  const [markdown, setMarkdown] = useState('/introduction.md');
  return (
    <div className='flex p-5 h-[90vh]'>
      <SideBar setMarkdown={setMarkdown}/>
      <DocContentPage markdownPath={markdown} />
    </div>
  )
}

export default DocPage
