import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Paper, Button } from '@mui/material'
import { map } from 'lodash'
import { Products } from '../../../services/api/products';

const productsController = new Products()


//MODAL PARA LOS FORMULARIOS EN GENERAL
//BOTON Y FORMULARIO PARA AGREGAR ELEMENTO
//FORMULARIO PARA EDITAR



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
        console.log('Editando', params.row)
        //Logica
      }
      const onDelete = (e) => {
        e.stopPropagation()
        console.log('Eliminando', params.row)
        //Logica
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

const paginationModel = { page: 0, pageSize: 5 };

export function ProductsList() {

  const [products, setProducts] = useState(null)

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
  }, [])

  const rows = map(products, (product) => (createData(product)))

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
    </>
  );
}
