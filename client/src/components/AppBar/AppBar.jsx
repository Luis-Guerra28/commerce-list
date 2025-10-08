import React from 'react'
import { AppBar as MuiAppBar, Box, IconButton, Toolbar } from '@mui/material'
import { Menu } from '@mui/icons-material'

export function AppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MuiAppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <Menu />
          </IconButton>
        </Toolbar>
      </MuiAppBar>
    </Box>
  )
}
