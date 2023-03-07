import React, { useContext } from 'react';
import axios from 'axios';
// context
import { ContextUpdate } from './EngineContext';
// mui
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

const DeleteEngineModal = ({ index, deleteOpen, deleteClose }) => {
  // context state
  const { updateEngines, setUpdateEngines } = useContext(ContextUpdate);

  async function deleteEngine(index) {
    if (!index) {
      return;
    }
    try {
      const deleteUrl = `http://localhost:3050/deleteEngine/${index}`;
      const deleteResponse = await axios.delete(deleteUrl);
      console.log(deleteResponse.data);
    } catch (err) {
      console.error('error on delete: ' + err);
    }
    setUpdateEngines(true);
    deleteClose();
  }

  return (
    <Dialog
        open={deleteOpen}
        onClose={deleteClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'>
        <DialogTitle id='alert-dialog-title'>
          {'Delete this steam engine?'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Are you sure you want to delete this object?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color='success' onClick={deleteClose}>
            No
          </Button>
          <Button color='error' onClick={() => deleteEngine(index)}>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
  );
};

export default DeleteEngineModal;