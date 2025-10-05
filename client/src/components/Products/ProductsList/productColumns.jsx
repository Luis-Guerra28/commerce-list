import { IconButton } from '@mui/material'
import { Delete, Edit } from '@mui/icons-material'

export const getProductsColumns = (handleEditing, handleDelete) => [
  {
    field: 'name',
    headerName: 'Producto',
    flex: 1
  },
  {
    field: 'cost',
    headerName: 'Costo',
    headerAlign: 'right',
    align: 'right',
    valueFormatter: (params) => {
      return params.toFixed(2)
    }
  },
  {
    field: 'units',
    headerName: 'Unidades',
    headerAlign: 'right',
    align: 'right',
  },
  {
    field: 'supplier',
    headerName: 'Proveedor',
    flex: 0.5,
  },
  {
    field: 'category',
    headerName: 'Categoria',
    flex: 0.5
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
    headerName: 'Costo unitario',
    headerAlign: 'right',
    align: 'right',
    valueFormatter: (params) => {
      return params.toFixed(4)
    }
  },
  {
    field: 'actions',
    headerName: 'Acciones',
    width: '200',
    sortable: false,
    headerAlign: 'right',
    align: 'right',
    renderCell: (params) => {

      return (
        <>
          <IconButton onClick={(e) => {
            e.stopPropagation()
            handleEditing(params.row)
          }}>
            <Edit />
          </IconButton>
          <IconButton onClick={(e) => {
            e.stopPropagation()
            handleDelete(params.row)
          }}>
            <Delete />
          </IconButton>
        </>
      )
    }
  }
]