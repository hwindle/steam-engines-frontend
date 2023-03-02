import React, { useState } from 'react';
// MUI
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import PencilIcon from '@mui/icons-material/Edit';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
// My CSS/components
import './SmallPhotoCard.css';
import AddUpdateEngineForm from '../components/AddUpdateEngineForm';

const SmallPhotoCard = ({ photo, id }) => {
  const [updateOpen, setUpdateOpen] = useState(false);
  const handleUpdateOpen = () => setUpdateOpen(true);
  const handleUpdateClose = () => setUpdateOpen(false);


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
            href='#'
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
          <Typography id='modal-modal-title' align='center' variant='h3' component='h2'>
            Update
          </Typography>
          <AddUpdateEngineForm oneEngine={photo} update={true} />
        </div>
      </Modal>

      {/* Delete Modal */}
    </div>
  );
};

export default SmallPhotoCard;
