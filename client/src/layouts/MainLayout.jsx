import React from 'react'
import { AppBar } from '../components/AppBar'

export function MainLayout(props) {
  const { children } = props

  return (
    <>
      <AppBar />
      {children}
    </>
  )
}
