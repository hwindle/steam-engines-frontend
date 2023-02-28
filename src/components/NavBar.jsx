import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const NavBar = () => {
  return (
    <ButtonGroup
      sx={{ width: '60%', justifyContent: 'center', alignItems: 'center' }}
      variant='text'
      aria-label='text button group'>
      <Link to='/' style={{display: 'block', width: '50%'}}>
        <Button size={'large'} fullWidth>Home</Button>
      </Link>
      <Link to='/addengine' style={{display: 'block', width: '50%'}}>
        <Button size={'large'} fullWidth>
          Add Engine
        </Button>
      </Link>
    </ButtonGroup>
  );
};

export default NavBar;
