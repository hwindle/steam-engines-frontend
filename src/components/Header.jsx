import { Typography } from "@mui/material";

const Header = ({title}) => {
  return (
    <header>
      <Typography variant='h1' align='center'>
        {title || 'Heading'}
      </Typography>
    </header>
  );
};

export default Header;