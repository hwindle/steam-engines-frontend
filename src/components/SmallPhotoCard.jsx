import React from 'react';
import './SmallPhotoCard.css';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

const SmallPhotoCard = ({ photo, id }) => {
  return (
    <div className='SmallPhotoCard'>
      <img 
        src={photo?.imageUrl}
        alt={photo?.railwayCompany}
      />
      <div>
        <h3>{photo?.designer - photo?.railwayCompany}</h3>
        <p>{photo?.description}</p>
      </div>
    </div>
  );
};

/**
 * <Card sx={{ maxWidth: 1000 }} className='SmallPhotoCard' key={id}>
      <CardMedia
        sx={{ height: 500 }}
        image={photo?.imageUrl}
        title={photo?.railwayCompany}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {photo?.designer - photo?.railwayCompany}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {photo?.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Edit</Button>
        <Button size='small'>Delete</Button>
      </CardActions>
    </Card>
 */

export default SmallPhotoCard;
