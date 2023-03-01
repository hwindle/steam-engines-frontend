import { Typography } from "@mui/material";

const Header = ({title}) => {
  return (
    <header>
      <Typography variant='h1' align='center' sx={{fontFamily: 'Castoro, Georgia, serif'}}>
        {title || 'Heading'}
      </Typography>
    </header>
  );
};

export default Header;