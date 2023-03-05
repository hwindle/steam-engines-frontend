import React, { useContext, useState } from 'react';
// Material UI
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
// my imports
import { ContextUpdate } from './EngineContext';
import AddUpdateEngineForm from './AddUpdateEngineForm';

const UpdateEngineModal = ({ oneEngine, updateBoxOpen }) => {
  // context state
  const { updateEngines, setUpdateEngines } = useContext(ContextUpdate);
  // other state
  const [updateOpen, setUpdateOpen] = useState(false);
  //const handleUpdateOpen = () => setUpdateOpen(true);
  const handleUpdateClose = () => (updateBoxOpen = false);
  // if button is clicked in the SmallPhotoCard parent, this is true

  return (
    <Modal
        open={updateBoxOpen}
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
          <AddUpdateEngineForm oneEngine={oneEngine} update={true} />
          {setUpdateEngines(true)}
        </div>
      </Modal>
  );
};

export default UpdateEngineModal;