import React, { useState } from 'react';
import axios from 'axios';
// MUI
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import PencilIcon from '@mui/icons-material/Edit';
import Typography from '@mui/material/Typography';
// modals/dialogs from Material UI
import Modal from '@mui/material/Modal';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// My CSS/components
import './SmallPhotoCard.css';
import AddUpdateEngineForm from '../components/AddUpdateEngineForm';
import { textTransform } from '@mui/system';

const SmallPhotoCard = ({ photo, id, childToParent }) => {
  // setting state and toggles for two modal dialog
  // boxes for update and delete
  const [updateOpen, setUpdateOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const handleUpdateOpen = () => setUpdateOpen(true);
  const handleUpdateClose = () => setUpdateOpen(false);
  const handleDeleteOpen = () => setDeleteOpen(true);
  const handleDeleteClose = () => setDeleteOpen(false);

  async function deleteEngine(oneEngineID) {
    if (!oneEngineID) {
      return;
    }

    try {
      const deleteUrl = `http://localhost:3050/deleteEngine/${oneEngineID}`;
      //console.log(deleteUrl);
      const deleteResponse = await axios.delete(deleteUrl);
      console.log(deleteResponse.data);
      childToParent(true);
    } catch (err) {
      console.error('error on delete: ' + err);
    }
    handleDeleteClose();
  }

  return (
    <div className='SmallPhotoCard' key={id}>
      <img src={photo?.imageUrl} alt={photo?.railwayCompany} />
      <div>
        <h3>{photo?.name || ''}</h3>
        <p className='title'>
          Designed by {photo?.designer} for the company {photo?.railwayCompany}
        </p>
        <p>
          {photo?.description}
          <Button target='_blank' color='secondary' href={photo?.wikiUrl}>
            More Info
          </Button>
        </p>
        <p>
          Service years: {photo?.startYear} - {photo?.endYear}
        </p>
        <p className='wheels'>
          Number of wheels:
          <Tooltip title='Front wheels - drive wheels - wheels under cab'>
            <span>{photo?.wheelbase}</span>
          </Tooltip>
        </p>
        <section className='buttons'>
          <Button
            onClick={handleUpdateOpen}
            variant='contained'
            color='success'
            startIcon={<PencilIcon />}>
            Update
          </Button>
          <Button
            onClick={handleDeleteOpen}
            variant='contained'
            color='error'
            startIcon={<DeleteIcon />}>
            Delete
          </Button>
        </section>
      </div>

      {/* Update Modal */}
      <Modal
        open={updateOpen}
        onClose={handleUpdateClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <div className='update-modal'>
          <Button
            onClick={handleUpdateClose}
            sx={{
              position: 'relative',
              top: 0,
              left: '92.5%',
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
              color: 'black',
              fontWeight: '600',
              borderRadius: '0 15px 0 0'
            }}>
            X
          </Button>
          <Typography
            id='modal-modal-title'
            align='center'
            variant='h3'
            component='h2'>
            Update
          </Typography>
          <AddUpdateEngineForm oneEngine={photo} update={true} />
          {childToParent(true)}
        </div>
      </Modal>

      {/* Delete Modal */}
      <Dialog
        open={deleteOpen}
        onClose={handleDeleteClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'>
        <DialogTitle id='alert-dialog-title'>
          {'Delete this steam engine?'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Are you sure you want to delete {photo?.railwayCompany}{' '}
            {photo?.name}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color='success' onClick={handleDeleteClose}>
            No
          </Button>
          <Button color='error' onClick={() => deleteEngine(photo.name)}>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SmallPhotoCard;
