import React from 'react'
import { Button, TextField, DialogActions, Box } from '@mui/material'
import { useFormik } from 'formik'
import { validationSchema, getInitialValues } from './ProductsForm.form'
import { Products } from '../../../services/api/products'

const productsController = new Products()

export function ProductsForm(props) {
  const { handleCloseModal, activateRefresh, product } = props

  console.log(product);


  const formik = useFormik({
    initialValues: getInitialValues(product),
    validationSchema,
    validateOnChange: false,
    onSubmit: async (formValues) => {
      if (product) {
        await productsController.updateProduct(formValues, product.id)
      } else {
        await productsController.createProduct(formValues)
      }
      activateRefresh()
      handleCloseModal()
    }
  })

  return (
    <>
      <form className='product-form' onSubmit={formik.handleSubmit}>
        <Box sx={{ display: 'grid', gap: 2, p: 2, gridTemplateColumns: '1fr 1fr' }}>
          <TextField
            label='Nombre'
            name='name'
            value={formik.values.name}
            error={formik.errors.name}
            onChange={formik.handleChange}
          />
          <TextField
            label='Costo'
            name='cost'
            value={formik.values.cost}
            error={formik.errors.cost}
            onChange={formik.handleChange}

          />
          <TextField
            label='Unidades'
            name='units'
            value={formik.values.units}
            error={formik.errors.units}
            onChange={formik.handleChange}
          />
          <TextField
            label='Costo unitario'
            name='unitCost'
            disabled
          />
          <TextField
            label='Proveedor'
            name='supplier'
            value={formik.values.supplier}
            error={formik.errors.supplier}
            onChange={formik.handleChange}
          />
          <TextField
            label='Categoria'
            name='category'
            value={formik.values.category}
            error={formik.errors.category}
            onChange={formik.handleChange}
          />
          <TextField
            sx={{ gridColumn: 'span 2' }}
            label='Descripcion'
            name='description'
            value={formik.values.description}
            error={formik.errors.description}
            onChange={formik.handleChange}
          />
          <DialogActions sx={{ gridColumn: 2 }}>
            <Button onClick={handleCloseModal}>Cancelar</Button>
            <Button variant='contained' type='submit'>Enviar</Button>
          </DialogActions>
        </Box>
      </form>
    </>

  )
}
