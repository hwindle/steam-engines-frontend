import React from 'react';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import PencilIcon from '@mui/icons-material/Edit';
import './SmallPhotoCard.css';

const SmallPhotoCard = ({ photo, id }) => {
  return (
    <div className='SmallPhotoCard'>
      <img src={photo?.imageUrl} alt={photo?.railwayCompany} />
      <div>
        <h3>{photo?.name || ''}</h3>
        <p className='title'>
          Designed by {photo?.designer} for the company {photo?.railwayCompany}
        </p>
        <p>
          {photo?.description}
          <Button target='_blank' color='secondary' href={photo?.wikiUrl}>More Info</Button>
        </p>
        <p>Service years: {photo?.startYear} - {photo?.endYear}</p>
        <p className='wheels'>
          Number of wheels:
          <Tooltip title='Front wheels - drive wheels - wheels under cab'>
            <span>{photo?.wheelbase}</span>
          </Tooltip>
        </p>
        <section className='buttons'>
          <Button
            href='#'
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
    </div>
  );
};

export default SmallPhotoCard;
