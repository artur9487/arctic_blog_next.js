/** @format */
import Image from 'next/image';
import React from 'react';

const SecondSection: React.FC = () => {
	return (
		<section className='mt-48'>
			<div className=' flex md:flex-row flex-col-reverse md:gap-32 gap-16 '>
				<div className='justify-around flex md:flex-col flex-col-reverse relative w-full md:w-2/3 gap-8 md:gap-4'>
					<div className='md:h-96 h-[200px]  md:w-full w-2/3 relative md:self-auto self-end'>
						<Image
							src={'/gren3.jpg'}
							objectFit='cover'
							layout='fill'
							alt='main photo'
						/>
						<div className='absolute -z-10 absolute -top-4 -left-4 w-full h-full bg-gradient-to-r from-slate-200/[.5] to-slate-200/[.9]'></div>
					</div>

					<div className='self-start w-2/3  text-justify md:self-auto'>
						<span className='self-start italic md:text-lg text-base items-center tracking-wide leading-7 text-gray-500'>
							Corem ipsum dolor sit amet, consectetur adipiscing elit.
							Ut tempus, diam vitae laoreet tempor, libero risus
							posere lorem, a commodo enim lorem nec lacus.
						</span>
					</div>
				</div>

				<div className='justify-around flex-col-reverse flex relative md:w-1/3 w-full md:gap-4 gap-8'>
					<div className='h-[200px] md:w-full w-2/3 relative self-end md:self-auto'>
						<Image
							src={'/gren2.jpg'}
							objectFit='cover'
							layout='fill'
							alt='main photo'
						/>
						<div className='absolute -z-10 -bottom-4 -right-4 w-full h-full bg-gradient-to-r from-slate-200/[.5] to-slate-200/[.9]'></div>
					</div>

					<div className='md:w-2/3 m-full mr-auto '>
						<div className='md:w-full mr-auto text-justify w-2/3'>
							<div className='text-2xl font-extrabold mb-8'>
								Explore new world
							</div>
							<span className='italic md:text-lg text-base items-center tracking-wide leading-7 text-gray-500'>
								Lorem ipsum dolor sit amet, consectetur adipiscing
								elit. Ut tempus, diam vitae laoreet tempor, libero
								risus posuere lorem, a commodo enim lorem nec lacus.
								Nullam orci mi, posuere non cursus et, ullamcorper
								molestie tortor.
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SecondSection;
