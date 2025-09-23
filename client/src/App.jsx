import React from 'react'
import { ProductsList } from './components/Products'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
});

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <h1>Hello world</h1>
        <ProductsList />
      </ThemeProvider>
    </>
  )
}

export default App
