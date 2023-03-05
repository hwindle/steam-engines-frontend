import React, { useState } from 'react';
// MUI
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import PencilIcon from '@mui/icons-material/Edit';
// My CSS/components
import './SmallPhotoCard.css';
import UpdateEngineModal from './UpdateEngineModal';
import DeleteEngineModal from './DeleteEngineModal';


const SmallPhotoCard = ({ photo, id }) => {
  // for showing either update modal or delete modal
  const [handleUpdate, setHandleUpdate] = useState(false);
  const [handleDelete, setHandleDelete] = useState(false);

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
            onClick={() => setHandleUpdate(true)}
            variant='contained'
            color='success'
            startIcon={<PencilIcon />}>
            Update
          </Button>
          <Button
            onClick={() => setHandleDelete(true)}
            variant='contained'
            color='error'
            startIcon={<DeleteIcon />}>
            Delete
          </Button>
        </section>
      </div>

      {/* MODALS */}
      <UpdateEngineModal oneEngine={photo} updateBoxOpen={handleUpdate} />
      <DeleteEngineModal index={photo._id} deleteBoxOpen={handleDelete} />
      
    </div>
  );
};

export default SmallPhotoCard;
