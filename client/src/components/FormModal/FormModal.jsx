import {
  Dialog,
  DialogTitle,
  DialogContent,
} from '@mui/material'


export function FormModal(props) {
  const { handleCloseModal, open, title, children } = props

  return (
    <Dialog open={open} onClose={handleCloseModal}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        {children}
      </DialogContent>

    </Dialog>
  )
}
