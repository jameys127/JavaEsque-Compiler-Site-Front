import { ListItemButton, ListItemText } from '@mui/material'
import React, {useState} from 'react'

const SideBarButton = ({text, onClick}) => {
    const [open, setOpen] = useState(false);
  return (
    <ListItemButton
        sx={[
            open
            ? {
                bgcolor: 'rgba(41,41,41,0.9)'
            }
            :{
                bgcolor: null
            },
            open
            ? {
                '&:hover':{
                    bgcolor: 'rgba(48,48,48,0.9)'
                }
            }
            :{
                '&:hover':{
                    bgcolor: 'rgba(41,41,41,0.9)'
                }
            }
        ]}
        alignItems='flex-start'
        onClick={onClick}
    >
        <ListItemText
            primary={text}
            primaryTypographyProps={{
                fontSize: 16
            }}
        />
    </ListItemButton>
  )
}

export default SideBarButton
