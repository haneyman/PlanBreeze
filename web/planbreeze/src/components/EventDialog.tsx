import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Event } from '../types/Event';

export default function EventDialog(props: any) {
  const [open, setOpen] = React.useState<boolean>(false);
  const [description, setDescription] = React.useState<string>();
  const [blob, setBlob] = React.useState<string>();
  const [date, setDate] = React.useState<string>();

  React.useEffect(() => {
      setOpen(props.eventDialogOpen);
  }, [props.eventDialogOpen]);

  const handleClose = () => {
    props.handleClose();
  };

  const handleAdd = () => {
    // save data, refresh
    const event: Event = { description, date, blob };
    props.handleClose(event);
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
            id="description"
            label="Event Description"
            type="text"
            fullWidth
            variant="standard"
            onChange={(event) => {setDescription(event.target.value)}}
          />
          <TextField
            autoFocus
            margin="dense"
            id="date"
            label="Event Date"
            type="text"
            fullWidth
            variant="standard"
            onChange={(event) => {setDate(event.target.value)}}
          />
          <TextField
            autoFocus
            margin="dense"
            id="blob"
            label="Paste Raw Text Here"
            type="text"
            fullWidth
            variant="outlined"
            multiline
            maxRows={4}
            onChange={(event) => {setBlob(event.target.value)}}
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
