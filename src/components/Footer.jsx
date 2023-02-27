import { Box } from '@mui/material';
import Button from '@mui/material/Button';

const Footer = () => {
	return (
		<footer style={{marginTop: '2rem', padding: '2rem'}}>
			<p style={{fontSize: '0.8rem', textAlign: 'center'}}>&copy; Hazel windle</p>
			<Box mt={2} align='center'>
				<Button target='_blank' color='secondary' variant='outline' href='https://github.com/hwindle/steam-engines-frontend'>GitHub</Button>
			</Box>
		</footer>
	);
};

export default Footer;
