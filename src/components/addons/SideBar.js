import { Box, ListItemButton, ListItemText } from '@mui/material'
import React, { useState } from 'react'
import './SideBar.css'
import SideBarButton from './SideBarButton'

const SideBar = ({setMarkdown, setSidebarOpen}) => {
  const handleClick = () => {
    setSidebarOpen(false);
  }
  return (
    <div className='sidebar lg:w-65 sm:w-50 md:w-50 w-65 h-full sm:rounded-bl-2xl sm:border sm:border-[#333] sm:rounded-tl-2xl bg-[rgb(17,17,17)] overflow-y-scroll'>
        <Box>
            <div className='sm:hidden flex w-full justify-end'>
              <i className='fa-solid fa-times text-[1.2rem] pt-3 pb-3 pr-3 cursor-pointer' onClick={handleClick}></i>
            </div>
            <SideBarButton 
              text='Introduction' 
              onClick={() => {
                setMarkdown('/introduction.md');
                setSidebarOpen(false);
              }}
            />
            <SideBarButton 
              text='Syntax' 
              onClick={() => {
                setMarkdown('/syntax.md');
                setSidebarOpen(false);
              }}
            />
            <SideBarButton 
              text='Getting Started' 
              onClick={() => {
                setMarkdown('/started.md');
                setSidebarOpen(false);
              }}
            />
            <SideBarButton 
              text='Classes' 
              onClick={() => {
                setMarkdown('/classes.md');
                setSidebarOpen(false);
              }}
            />
            <SideBarButton 
              text='Statements' 
              onClick={() => {
                setMarkdown('/statements.md');
                setSidebarOpen(false);
              }}
            />
            <SideBarButton 
              text='Example Program' 
              onClick={() => {
                setMarkdown('/example.md');
                setSidebarOpen(false);
              }}
            />
            
        </Box>
    </div>
  )
}

export default SideBar
