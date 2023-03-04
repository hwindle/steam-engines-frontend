import { Typography } from '@mui/material';
import './Header.css';


const Header = ({ title }) => {
  return (
    <header>
      <Typography variant='h1' align='center' id='topHeading'>
        {title || 'Heading'}
      </Typography>
    </header>
  );
};

export default Header;
