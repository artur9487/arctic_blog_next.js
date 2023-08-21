/** @format */
import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AirIcon from '@mui/icons-material/Air';

const FirstSection: React.FC = () => {
	return (
		<section>
			<Stack
				direction='row'
				sx={{
					width: '100%',
					height: 600,
					margin: 'auto',
					position: 'relative',
				}}>
				<Image
					src={'/green.jpg'}
					objectFit='cover'
					layout='fill'
					alt='main photo'
				/>
				<Box
					sx={{
						bgcolor: 'rgba(255,255,255,0.4)',
						width: '50%',
						height: '100%',
						overflow: 'hidden',
						position: 'relative',
					}}>
					<Box
						sx={{
							position: 'absolute',
							top: '40%',
							right: 0,
							transform: 'translateY(-50%)',
						}}>
						<Typography
							sx={{
								fontSize: 130,
								color: 'white',
								zIndex: 999,
								letterSpacing: 10,
								fontWeight: 1000,
								fontFamily: 'Alatsi',
								textShadow: '2px 2px rgb(215, 230, 239)',
							}}>
							GREEN
						</Typography>
					</Box>
				</Box>
				<Stack
					direction='column'
					alignItems='center'
					sx={{
						width: '50%',
						height: '100%',
						bgcolor: 'rgba(255,255,255,0.85)',
						mb: 40,
						position: 'relative',
					}}>
					<div className='flex-3'></div>
					<div className='border-4 border-indigo-600 p-10 flex-1'>
						<span className='font-normal leading-8 text-black italic tracking-normal font-alatsi'>
							Curabitur in risus sapien. Donec ex dolor, suscipit ut
							nisi a, tincidunt laoreet nulla.
						</span>
					</div>
					{/*	<Box sx={{ flex: 1, p: 10, border: 1 }}>
						<Typography
							sx={{
								fontWeight: 500,
								lineHeight: 2.5,
								color: 'rgb(107, 107, 107)',
								fontStyle: 'italic',
								letterSpacing: 1.5,
								fontFamily: 'Alatsi',
							}}>
							Curabitur in risus sapien. Donec ex dolor, suscipit ut
							nisi a, tincidunt laoreet nulla.
						</Typography>
						</Box>*/}
					<div className='absolute left-0 top-1/3'>
						<div className='text-md text-9xl text-black z-999 font-alatsi font-bold tracking-normal Alatsi'>
							LAND
						</div>
					</div>
				</Stack>
				<Stack
					justifyContent='center'
					alignItems='center'
					direction='column'
					sx={{
						borderRadius: 10,
						bgcolor: 'rgb(255,255,255)',
						width: 250,
						height: 300,
						boxShadow: '-12px 16px 14px -4px rgba(215, 230, 239, 1)',
						position: 'absolute',
						bottom: -70,
						left: -70,
					}}>
					<Stack
						alignItems='center'
						spacing={1}
						sx={{ margin: 'auto', width: '70%' }}
						direction='row'>
						<CloudQueueIcon
							sx={{ fontSize: 50, color: 'rgb(147, 204, 245)' }}
						/>
						<Stack direction='column'>
							<Typography sx={{ fontWeight: 600, fontSize: 15 }}>
								22 / 10 / 2022
							</Typography>
							<Typography sx={{ color: 'gray', fontSize: 13 }}>
								15C
							</Typography>
						</Stack>
					</Stack>
					<Stack
						alignItems='center'
						spacing={1}
						sx={{ margin: 'auto', width: '70%' }}
						direction='row'>
						<AcUnitIcon
							sx={{ fontSize: 50, color: 'rgb(137, 241, 245)' }}
						/>
						<Stack direction='column'>
							<Typography sx={{ fontWeight: 600, fontSize: 15 }}>
								Snowy
							</Typography>
							<Typography sx={{ color: 'gray', fontSize: 13 }}>
								50%
							</Typography>
						</Stack>
					</Stack>
					<Stack
						alignItems='center'
						spacing={1}
						sx={{ margin: 'auto', width: '70%' }}
						direction='row'>
						<AirIcon
							sx={{ fontSize: 50, color: 'rgb(104, 98, 252)' }}
						/>
						<Stack direction='column'>
							<Typography sx={{ fontWeight: 600, fontSize: 15 }}>
								MPH West
							</Typography>
							<Typography sx={{ color: 'gray', fontSize: 13 }}>
								15C
							</Typography>
						</Stack>
					</Stack>
				</Stack>
			</Stack>
		</section>
	);
};

export default FirstSection;
