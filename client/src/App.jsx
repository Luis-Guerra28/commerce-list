import React, { useState } from 'react'
import { Button } from '@mui/material'
import { ProductsList } from './components/Products'
import { FormModal } from './components/FormModal'
import './App.css'

function App() {
  const [open, setOpen] = useState(false)
  const handleOpenModal = () => setOpen(true)
  const handleCloseModal = () => setOpen(false)

  return (
    <main className='main-container'>
      <div className='product__top-container'>
        <h1>Productos</h1>
        <Button
          className='product__add'
          variant='contained'
          onClick={handleOpenModal}
        >
          Crear Producto
        </Button>
      </div>

      <ProductsList />
      <FormModal
        open={open}
        handleCloseModal={handleCloseModal}
      />
    </main>
  )
}

export default App