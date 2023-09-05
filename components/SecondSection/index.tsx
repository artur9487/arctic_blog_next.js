/** @format */

import { Stack, Typography, Box, Button } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const SecondSection: React.FC = () => {
	return (
		<section>
			<Stack columnGap={10} direction='row' sx={{ height: 800 }}>
				<div className='justify-around flex flex-col relative w-2/3 '>
					<div className='h-96 w-full relative'>
						<Image
							src={'/gren3.jpg'}
							objectFit='cover'
							layout='fill'
							alt='main photo'
						/>
						<div className='absolute -z-10 absolute -top-8 -left-8 w-full h-full bg-gradient-to-r from-slate-200/[.5] to-slate-200/[.9]'></div>
					</div>
					<div></div>
					<div className='w-2/3 ml-auto text-justify  '>
						<span className='text-md items-center font-alatsi tracking-wide leading-7 text-gray-500'>
							Corem ipsum dolor sit amet, consectetur adipiscing elit.
							Ut tempus, diam vitae laoreet tempor, libero risus
							posere lorem, a commodo enim lorem nec lacus.
						</span>
					</div>
				</div>

				<Stack
					justifyContent='space-around'
					direction={'column-reverse'}
					sx={{ position: 'relative', width: '40%' }}>
					<Box
						sx={{ height: 200, width: '100%', position: 'relative' }}>
						<Image
							src={'/gren2.jpg'}
							objectFit='cover'
							layout='fill'
							alt='main photo'
						/>
						<div className='absolute -z-10 -bottom-8 -right-8 w-full h-full bg-gradient-to-r from-slate-200/[.5] to-slate-200/[.9]'></div>
					</Box>

					<div className='w-2/3 mr-auto '>
						<div className='w-full mr-auto text-justify'>
							<div className='text-2xl font-semibold'>
								Explore new world
							</div>
							<span className='text-md items-center tracking-wide leading-7 text-gray-500'>
								Lorem ipsum dolor sit amet, consectetur adipiscing
								elit. Ut tempus, diam vitae laoreet tempor, libero
								risus posuere lorem, a commodo enim lorem nec lacus.
								Nullam orci mi, posuere non cursus et, ullamcorper
								molestie tortor.
							</span>
						</div>

						<Button variant='contained'>Click for more</Button>
					</div>
				</Stack>
			</Stack>
		</section>
	);
};

export default SecondSection;
