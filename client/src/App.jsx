import React from 'react'
import { BrowserRouter } from 'react-router'
import { WebRouter } from './router/WebRouter'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <WebRouter />
    </BrowserRouter >
  )
}

export default App