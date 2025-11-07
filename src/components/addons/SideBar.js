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
              }}
            />
            <SideBarButton 
              text='Syntax' 
              onClick={() => {
                setMarkdown('/syntax.md')
              }}
            />
            <SideBarButton 
              text='Getting Started' 
              onClick={() => {
                setMarkdown('/started.md')
              }}
            />
            <SideBarButton 
              text='Classes' 
              onClick={() => {
                setMarkdown('/classes.md')
              }}
            />
            <SideBarButton 
              text='Statements' 
              onClick={() => {
                setMarkdown('/statements.md')
              }}
            />
            <SideBarButton 
              text='Example Program' 
              onClick={() => {
                setMarkdown('/example.md')
              }}
            />
            
        </Box>
    </div>
  )
}

export default SideBar
