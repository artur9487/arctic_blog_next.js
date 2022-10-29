/** @format */

import { Stack, Typography, Box, Button } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const SecondSection: React.FC = () => {
	return (
		<section>
			<Stack columnGap={10} direction='row' sx={{ height: 800 }}>
				<Stack
					justifyContent='space-around'
					direction={'column'}
					sx={{ position: 'relative', width: '60%' }}>
					<Box sx={{ height: 500, width: '100%', position: 'relative' }}>
						<Image
							src={'/gren3.jpg'}
							objectFit='cover'
							layout='fill'
							alt='main photo'
						/>
						<Box
							sx={{
								zIndex: -1,
								position: 'absolute',
								top: -30,
								left: -30,
								background:
									'linear-gradient(to left, rgb(215, 230, 239,0.5),rgba(237, 244, 248))',
								width: '100%',
								height: '100%'
							}}
						/>
					</Box>
					<Stack sx={{ width: '70%', marginLeft: 'auto' }}>
						<Typography
							sx={{
								fontSize: 14,
								color: 'rgb(107, 107, 107)',
								lineHeight: 2,
								textAlign: 'justify',
								letterSpacing: 1.5,
								fontFamily: 'Alatsi'
							}}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
							tempus, diam vitae laoreet tempor, libero risus posuere lorem, a
							commodo enim lorem nec lacus.
						</Typography>
					</Stack>
				</Stack>
				<Stack
					justifyContent='space-around'
					direction={'column-reverse'}
					sx={{ position: 'relative', width: '40%' }}>
					<Box sx={{ height: 200, width: '100%', position: 'relative' }}>
						<Image
							src={'/gren2.jpg'}
							objectFit='cover'
							layout='fill'
							alt='main photo'
						/>
						<Box
							sx={{
								zIndex: -1,
								position: 'absolute',
								bottom: -30,
								right: -30,
								background:
									'linear-gradient(to left, rgb(215, 230, 239,0.5),rgba(237, 244, 248))',
								width: '100%',
								height: '100%'
							}}
						/>
					</Box>

					<Stack sx={{ width: '70%', marginRight: 'auto' }} spacing={2}>
						<Typography
							sx={{
								fontSize: 30,
								fontWeight: 600,
								fontFamily: 'Alatsi'
							}}>
							Explore new world
						</Typography>
						<Typography
							sx={{
								fontSize: 14,
								color: 'rgb(107, 107, 107)',
								lineHeight: 2,
								textAlign: 'justify',
								letterSpacing: 1.5,
								fontFamily: 'Alatsi'
							}}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
							tempus, diam vitae laoreet tempor, libero risus posuere lorem, a
							commodo enim lorem nec lacus. Nullam orci mi, posuere non cursus
							et, ullamcorper molestie tortor.
						</Typography>
						<Button variant='contained'>Click for more</Button>
					</Stack>
				</Stack>
			</Stack>
		</section>
	);
};

export default SecondSection;
