import React, { useState } from 'react'
import { Button } from '@mui/material'
import { ProductsForm, ProductsList } from './components/Products'
import { FormModal } from './components/FormModal'
import './App.css'

function App() {
  const [open, setOpen] = useState(false)

  const handleOpenModal = () => setOpen(true)
  const handleCloseModal = () => setOpen(false)

  const [refreshTrigger, setRefreshTrigger] = useState(0)

  const activateRefresh = () => {
    setRefreshTrigger(prev => prev + 1)
  }

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

      <ProductsList refreshTrigger={refreshTrigger} activateRefresh={activateRefresh} />
      <FormModal
        open={open}
        handleCloseModal={handleCloseModal}
        title='Crear Producto'
      >
        <ProductsForm
          handleCloseModal={handleCloseModal}
          activateRefresh={activateRefresh}
        />
      </FormModal>
    </main>
  )
}

export default App