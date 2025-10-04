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
    headerName: 'Costo'
  },
  {
    field: 'units',
    headerName: 'Unidades'
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
    headerName: 'Costo unitario'
  },
  {
    field: 'actions',
    headerName: 'Acciones',
    width: '200',
    sortable: false,
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