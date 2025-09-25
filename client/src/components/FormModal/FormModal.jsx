import {
  Dialog,
  DialogTitle,
  DialogContent,
} from '@mui/material'


export function FormModal(props) {
  const { handleCloseModal, open, children } = props

  return (
    <Dialog open={open} onClose={handleCloseModal}>
      <DialogTitle>Crear Producto</DialogTitle>
      <DialogContent>
        {children}
      </DialogContent>

    </Dialog>
  )
}
