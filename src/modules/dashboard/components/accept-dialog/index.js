import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  DialogActions
} from '@material-ui/core';
console.log('wom');
function AcceptDialog(props) {
  return (
    <Dialog
      disableEscapeKeyDown
      maxWidth="md"
      open={props.open}
      aria-labelledby="confirmation-dialog-title"
      {...props}
      onBackdropClick={props.onCancel}
    >
      <DialogTitle id="confirmation-dialog-title">{props.title}</DialogTitle>
      <DialogContent>{props.content}</DialogContent>
      <DialogActions>
        <Button onClick={props.onCancel} color="primary">
          Cancelar
        </Button>
        <Button onClick={props.onAccept} color="primary">
          Aceptar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AcceptDialog;
