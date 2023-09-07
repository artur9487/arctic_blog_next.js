/** @format */

import { Grid, Typography, Box, Stack } from '@mui/material';
import Image from 'next/image';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

interface placesSchema {
	img: string;
	title: string;
	authorImg: string;
	author: string;
	review: string;
}

const places: placesSchema[] = [
	{
		img: '/ilulissat.jpg',
		title: 'Ilulissat',
		authorImg: '/face1.png',
		author: 'Antony',
		review:
			'Curabitur in risus sapien. Donec ex dolor, suscipit ut nisi a, tincidunt laoreet nulla. ',
	},
	{
		img: '/nuuk.jpg',
		title: 'Nuuk',
		authorImg: '/face2.png',
		author: 'Frank',
		review:
			'Curabitur in risus sapien. Donec ex dolor, suscipit ut nisi a, tincidunt laoreet nulla.',
	},
	{
		img: '/Uunartoq.jpg',
		title: 'Uunartoq',
		authorImg: '/face3.png',
		author: 'Mary',
		review:
			'Curabitur in risus sapien. Donec ex dolor, suscipit ut nisi a, tincidunt laoreet nulla.',
	},
];

const ThirdSection: React.FC = () => {
	return (
		<section>
			<div className='flex flex-col mb-12'>
				<span className='text-5xl font-semibold'>
					Read the most popular reviews
				</span>
				<span className='text-5xl font-semibold'>
					from world travel experts
				</span>
				<span className='text-gray-500 w-1/3 text-justify mt-12 tracking-widest leading-7 '>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
					tempus, diam vitae laoreet tempor, libero risus posuere
					lorem, a commodo enim lorem nec lacus.
				</span>
			</div>
			<Grid
				justifyContent='space-around'
				columnGap={1}
				rowGap={14}
				container
				sx={{ height: 1000 }}>
				{places.map((item, indx) => {
					const { img, authorImg, author, review, title } = item;
					return (
						<Grid
							key={indx}
							sx={{ position: 'relative' }}
							container
							item
							xs={4}>
							<Image
								src={img}
								objectFit='cover'
								layout='fill'
								alt='main photo'
							/>
							<Stack
								direction='column'
								spacing={1}
								sx={{
									borderRadius: 5,
									position: 'absolute',
									bottom: -70,
									right: -70,
									bgcolor: 'white',
									boxShadow:
										'12px 16px 14px -4px rgba(215, 230, 239, 1)',
									p: 3,
									width: '100%',
								}}>
								<Typography
									sx={{
										textAlign: 'center',
										fontFamily: 'Alatsi',
										fontSize: 22,
										fontWeight: 800,
									}}>
									{title}
								</Typography>
								<Stack direction='row' spacing={2}>
									<div className='flex flex-col justify-center items-center'>
										<span className='font-semibold italic'>
											{author}
										</span>
										<div className='relative h-16 w-16'>
											<Image
												src={authorImg}
												objectFit='cover'
												layout='fill'
												alt='author photo'
											/>
										</div>
									</div>
								</Stack>
								<span className='text-justify'>{review}</span>
							</Stack>
							<Stack justifyContent='flex-end' direction='row'>
								<Typography
									sx={{
										color: 'gray',
										textAlign: 'right',
										cursor: 'pointer',
									}}>
									See more
								</Typography>
								<KeyboardDoubleArrowRightIcon
									sx={{ color: 'blue' }}
								/>
							</Stack>
						</Grid>
					);
				})}
			</Grid>
		</section>
	);
};

export default ThirdSection;
