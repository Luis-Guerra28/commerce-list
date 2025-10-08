import React from 'react'
import { Routes, Route } from 'react-router'
import { MainLayout } from '../layouts'
import { Products } from '../pages'

export function WebRouter() {
  const loadLayout = (Layout, Page) => {
    return (
      <Layout>
        <Page />
      </Layout>
    )
  }

  return (
    <Routes>
      <Route path='/' element={loadLayout(MainLayout, Products)} />
    </Routes>
  )
}