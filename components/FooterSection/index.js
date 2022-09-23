/** @format */
import { Box, Stack, Typography, Button } from '@mui/material';

const FooterSection = () => {
	return (
		<>
			<Box
				sx={{
					background:
						'linear-gradient(to left, rgb(215, 230, 239,0.5),rgba(237, 244, 248))',
					height: 500,
					width: '100%'
				}}>
				<Stack
					direction='row'
					justifyContent='space-between'
					alignItems='center'
					sx={{ border: 1 }}>
					<Stack
						justifyContent='center'
						alignItems='center'
						sx={{
							width: 300,
							height: 200,
							bgcolor: 'rgba(215, 230, 239, 1)'
						}}>
						<Typography
							variant='h4'
							sx={{ fontFamily: 'Alatsi', letterSpacing: 2 }}>
							Subscribe
						</Typography>
					</Stack>
					<input
						style={{
							height: 30,
							padding: 25,
							fontFamily: 'Alatsi',
							width: '30%'
						}}
						type='text'
						placeholder='Enter your email'></input>
					<Button sx={{ py: 2, px: 5, mr: 10 }} variant='contained'>
						Subscribe
					</Button>
				</Stack>
			</Box>
		</>
	);
};

export default FooterSection;
