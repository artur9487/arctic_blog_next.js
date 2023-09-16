/** @format */

import Image from 'next/image';

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
			<div className=' flex-wrap flex gap-24 justify-center h-[1000px] w-full '>
				{places.map((item, indx) => {
					const { img, authorImg, author, review, title } = item;
					return (
						<div
							key={indx}
							className='relative w-1/3 h-2/5 self-center '>
							<Image
								src={img}
								objectFit='cover'
								layout='fill'
								alt='main photo'
							/>
							<div className='flex flex-col gap-2 rounded-xl absolute -bottom-16 -right-16 bg-white shadow-lg shadow-slate-200 w-full p-4'>
								<span className='text-center text-2xl font-semibold'>
									{title}
								</span>

								<div className='flex flex-row gap-2'>
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
									<span className='text-justify'>{review}</span>
								</div>
							</div>
							{/*<div className='flex justify-end flex-row '>
								<span className='text-gray-500 text-right cursor-pointer'>
									See more
								</span>
								<KeyboardDoubleArrowRightIcon
									sx={{ color: 'blue' }}
								/>
							</div>*/}
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default ThirdSection;
