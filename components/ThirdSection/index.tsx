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
			'Curabitur in risus sapien. Donec ex dolor, suscipit ut nisi a, tincidunt laoreet nulla. '
	},
	{
		img: '/nuuk.jpg',
		title: 'Nuuk',
		authorImg: '/face2.png',
		author: 'Frank',
		review:
			'Curabitur in risus sapien. Donec ex dolor, suscipit ut nisi a, tincidunt laoreet nulla.'
	},
	{
		img: '/Uunartoq.jpg',
		title: 'Uunartoq',
		authorImg: '/face3.png',
		author: 'Mary',
		review:
			'Curabitur in risus sapien. Donec ex dolor, suscipit ut nisi a, tincidunt laoreet nulla.'
	}
];

const ThirdSection: React.FC = () => {
	return (
		<section>
			<Stack direction='column' spacing={0} sx={{ mb: 10 }}>
				<Typography
					sx={{
						fontFamily: 'Alatsi',
						fontSize: 42,
						fontWeight: 1000
					}}>
					Read the most popular reviews
				</Typography>
				<Typography
					sx={{
						fontFamily: 'Alatsi',
						fontSize: 42,
						fontWeight: 1000
					}}>
					from world travel experts
				</Typography>
				<Typography
					sx={{
						color: 'gray',
						width: '40%',
						textAlign: 'justify',
						mt: 3,
						fontFamily: 'Alatsi',
						letterSpacing: 2
					}}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus,
					diam vitae laoreet tempor, libero risus posuere lorem, a commodo enim
					lorem nec lacus.
				</Typography>
			</Stack>

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
									boxShadow: '12px 16px 14px -4px rgba(215, 230, 239, 1)',
									p: 3,
									width: '100%'
								}}>
								<Typography
									sx={{
										textAlign: 'center',
										fontFamily: 'Alatsi',
										fontSize: 22,
										fontWeight: 800
									}}>
									{title}
								</Typography>
								<Stack direction='row' spacing={2}>
									<Stack
										direction='column'
										justifyContent='center'
										alignItems='center'>
										<Typography
											sx={{
												fontWeight: 600,
												fontStyle: 'italic',
												fontFamily: 'Alatsi'
											}}>
											{author}
										</Typography>
										<Box sx={{ position: 'relative', width: 50, height: 50 }}>
											<Image
												src={authorImg}
												objectFit='cover'
												layout='fill'
												alt='author photo'
											/>
										</Box>
									</Stack>
									<Typography
										sx={{ textAlign: 'justify', fontFamily: 'Alatsi' }}>
										{review}
									</Typography>
								</Stack>
								<Stack justifyContent='flex-end' direction='row'>
									<Typography
										sx={{
											color: 'gray',
											textAlign: 'right',
											cursor: 'pointer'
										}}>
										See more
									</Typography>
									<KeyboardDoubleArrowRightIcon sx={{ color: 'blue' }} />
								</Stack>
							</Stack>
						</Grid>
					);
				})}
			</Grid>
		</section>
	);
};

export default ThirdSection;
