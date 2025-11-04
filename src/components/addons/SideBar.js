import { Box, ListItemButton, ListItemText } from '@mui/material'
import React, { useState } from 'react'
import './SideBar.css'
import SideBarButton from './SideBarButton'

const SideBar = ({setMarkdown}) => {
  return (
    <div className='sidebar w-65 h-full rounded-bl-2xl border border-[#333] rounded-tl-2xl bg-[rgb(17,17,17)] overflow-y-scroll'>
        <Box>
            <SideBarButton 
              text='Introduction' 
              onClick={() => {
                setMarkdown('/introduction.md')
                console.log('working');
              }}/>
            <SideBarButton 
              text='Syntax' 
              onClick={() => {
                setMarkdown('/syntax.md')
                console.log('working');
              }}/>
        </Box>
    </div>
  )
}

export default SideBar
