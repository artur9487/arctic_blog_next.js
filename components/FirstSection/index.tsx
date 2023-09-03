/** @format */
import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AirIcon from '@mui/icons-material/Air';

const FirstSection: React.FC = () => {
	return (
		<section className=' relative'>
			<div className='flex flex-row w-full h-96 m-auto relative '>
				<Image
					src={'/green.jpg'}
					objectFit='cover'
					layout='fill'
					alt='main photo'
				/>
				<div className=' bg-white/[.5] w-1/2 h-full overflow-hidden relative flex'>
					<div className='absolute top-1/3 right-0'>
						<span className='drop-shadow-lg text-9xl text-white z-999 font-alatsi font-bold tracking-normal'>
							GREEN
						</span>
					</div>
				</div>
				<div className='  relative flex flex-col w-1/2 h-full bg-white/[.5] overflow-hidden z-999'>
					<div className='h-2/3 '></div>
					<div className=' p-4 h-1/3 w-full '>
						<span className=' font-normal leading-8 text-black italic tracking-normal font-alatsi'>
							Curabitur in risus sapien. Donec ex dolor, suscipit ut
							Wł nisi a, tincidunt laoreet nulla. Donec ex dolor,
							suscipit ut nisi a, tincidunt laoreet nulla.
						</span>
					</div>
					<div className='absolute left-0 top-1/3  h-2/3 w-full'>
						<div className=' text-9xl text-black z-999 font-alatsi font-bold tracking-normal '>
							LAND
						</div>
					</div>
				</div>

				{/*	<Stack
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
						bottom: -100,
						left: -100,
					}}>*/}
				<div className='rounded-xl justify-center items-center flex flex-col bg-white w-60 h-50 absolute -left-28 -bottom-28'>
					<div className='flex gap-4 flex-row items-center w-3/4 border-2 border-black'>
						<CloudQueueIcon
							sx={{ fontSize: 50, color: 'rgb(147, 204, 245)' }}
						/>
						<div className='flex flex-col'>
							<span className='font-gray-400 text-xl font-alatsi font-thin'>
								22 / 10 / 2022
							</span>
							<span className='font-gray-400 font-alatsi font-thin'>
								15C
							</span>
						</div>
					</div>

					<div className='flex gap-4 flex-row items-center w-3/4'>
						<AcUnitIcon
							sx={{ fontSize: 50, color: 'rgb(137, 241, 245)' }}
						/>
						<div className='flex flex-col'>
							<span className='font-gray-400 text-xl font-alatsi font-thin'>
								Snowy
							</span>
							<span className='font-gray-400 font-alatsi font-thin'>
								50%
							</span>
						</div>
					</div>
					<div className='flex gap-4 flex-row items-center w-3/4'>
						<AirIcon
							sx={{ fontSize: 50, color: 'rgb(104, 98, 252)' }}
						/>
						<div className='flex flex-col'>
							<span className='font-gray-400 text-xl font-alatsi font-thin'>
								MPH West
							</span>
							<span className='font-gray-400 font-alatsi font-thin'>
								15C
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FirstSection;
