import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Paper, Button, DialogContent, DialogContentText, DialogActions } from '@mui/material'
import { map } from 'lodash'
import { Products } from '../../../services/api/products';
import { ProductsForm } from '../ProductsForm';
import { FormModal } from '../../FormModal';

const productsController = new Products()

function createData(product) {
  const {
    name,
    cost,
    units,
    supplier,
    category,
    status,
    descrption,
    unitCost,
    _id: id
  } = product

  return {
    name,
    cost,
    units,
    supplier,
    category,
    status,
    descrption,
    unitCost,
    id
  };
}

const paginationModel = { page: 0, pageSize: 5 };

export function ProductsList(props) {
  const { refreshTrigger, activateRefresh } = props

  const [products, setProducts] = useState(null)
  const [editingProduct, setEditingProducts] = useState(null)
  const [productToDelete, setProductToDelete] = useState(null)
  const [openFormModal, setOpenFormModal] = useState(false)
  const [openDeleteModal, setOpenDeleteModal] = useState(false)

  const handleOpenEditingModal = () => setOpenFormModal(true)
  const handleCloseEditingModal = () => {
    setOpenFormModal(false)
    setEditingProducts(null)
  }

  const handleEditing = (product) => {
    setEditingProducts(product)
    handleOpenEditingModal(true)
  }

  const handleOpenDeleteModal = () => setOpenDeleteModal(true)
  const handleCloseDeleteModal = () => setOpenDeleteModal(false)

  const handleDelete = (product) => {
    setProductToDelete(product)
    handleOpenDeleteModal()
  }

  const deleteProduct = async () => {
    await productsController.deleteProduct(productToDelete.id)
    activateRefresh()
    handleCloseDeleteModal()
  }

  useEffect(() => {
    (async () => {
      try {
        const response = await productsController.getProducts()
        setProducts(response)
      } catch (error) {
        console.error(error)
        throw error
      }
    })()
  }, [refreshTrigger])

  const rows = map(products, (product) => (createData(product)))

  const columns = [
    {
      field: 'name',
      headerName: 'Producto'
    },
    {
      field: 'cost',
      headerName: 'Costo'
    },
    {
      field: 'units',
      headerName: 'Unidades'
    },
    {
      field: 'supplier',
      headerName: 'Proveedor'
    },
    {
      field: 'category',
      headerName: 'Categoria'
    },
    {
      field: 'status',
      headerName: 'Estatus'
    },
    {
      field: 'description',
      headerName: 'Descipción'
    },
    {
      field: 'unitCost',
      headerName: 'Costo unitario'
    },
    {
      field: 'actions',
      headerName: 'Acciones',
      width: '200',
      sortable: false,
      renderCell: (params) => {
        const onEdit = (e) => {
          e.stopPropagation()
          handleOpenEditingModal()
          handleEditing(params.row)
        }
        const onDelete = async (e) => {
          e.stopPropagation()
          handleDelete(params.row)
          console.log('Eliminando', params.row)
        }

        return (
          <>
            <Button onClick={onEdit}>
              Editar
            </Button>
            <Button onClick={onDelete}>
              Eliminar
            </Button>
          </>
        )
      }
    }
  ]

  return (
    <>
      <Paper sx={{ width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          sx={{ border: 0 }}
        />
      </Paper>
      <FormModal
        open={openFormModal}
        handleCloseModal={handleCloseEditingModal}
        title='Editar producto'
      >
        <ProductsForm
          product={editingProduct}
          handleCloseModal={handleCloseEditingModal}
          activateRefresh={activateRefresh}
        />
      </FormModal>
      <FormModal
        open={openDeleteModal}
        handleCloseModal={handleCloseDeleteModal}
        title='Eliminar producto'
      >

        <DialogContent>
          <DialogContentText>
            Esta seguro que desea borrar el producto:
          </DialogContentText>
          <strong>{productToDelete?.name}</strong>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteModal}>Cancelar</Button>
          <Button onClick={deleteProduct}>
            Confimar
          </Button>
        </DialogActions>

      </FormModal >
    </>
  );
}
