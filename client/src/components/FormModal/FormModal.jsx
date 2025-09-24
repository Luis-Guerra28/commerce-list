import {
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
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
      <DialogActions>
        <Button onClick={handleCloseModal}>
          Cancelar
        </Button>
        <Button variant='contained'>
          Guardar
        </Button>
      </DialogActions>
    </Dialog>
  )
}
