import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function EventDialog(props: any) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
      setOpen(props.eventDialogOpen);
  }, [props.eventDialogOpen]);

  const handleClose = () => {
    props.handleClose();
  };

  const handleAdd = () => {
    // save data, refresh
    props.handleClose();
  };

  return (
    
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Event</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter the event information
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Event Description"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Event Date"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAdd}>Add Event</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
