import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';

function CustomDialog({ open, handleClose, title, content }) {
  return (
    <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth="md">
      <DialogTitle style={{'fontWeight':'bold'}}>{title}</DialogTitle>
      <DialogContent>{content}</DialogContent>
    </Dialog>
  );
}

export default CustomDialog;
