/** @format */
import Image from 'next/image';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AirIcon from '@mui/icons-material/Air';
import { useMediaQuery } from '@mui/material';

const FirstSection: React.FC = () => {
	const mediaQuery800 = useMediaQuery('min-width:800px');
	return (
		<section className=' relative md:px-28 px-0'>
			<div className='flex flex-row w-full h-96 relative '>
				<Image
					src={'/green.jpg'}
					objectFit='cover'
					layout='fill'
					alt='main photo'
				/>
				<div className=' bg-white/[.5] w-1/2 h-full overflow-hidden relative flex'>
					<div className='absolute top-1/3 right-0'>
						<span className='drop-shadow-lg md:text-6xl lg:text-8xl xl:text-9xl text-white z-999 font-bold tracking-normal font-alatsi'>
							GREEN
						</span>
					</div>
				</div>
				<div className=' relative flex flex-col w-1/2 h-full bg-white/[.5] overflow-hidden z-999'>
					<div className='md:h-2/3 h-3/5'></div>
					<div className=' md:p-4 h-1/3 w-full p-2'>
						<span className='md:leading-8 leading-6 text-black italic font-semibold tracking-normal md:text-base text-xs'>
							Curabitur in risus sapien. Donec ex dolor, suscipit ut
							Wł nisi a, tincidunt laoreet nulla. Donec ex dolor,
							suscipit ut nisi a, tincidunt laoreet nulla.
						</span>
					</div>
					<div className='absolute left-0 top-1/3  h-2/3 w-full'>
						<div className='font-alatsi text-6xl md:text-9xl  text-black z-999 font-bold tracking-normal '>
							LAND
						</div>
					</div>
				</div>
				<div className='md:py-12 py-6 md:px-8 px-4 gap-3 drop-shadow-lg rounded-xl justify-start items-start flex flex-col bg-white absolute left-2 md:-left-28 -bottom-14 md:-bottom-32'>
					<div className='flex gap-4 flex-row items-center '>
						<CloudQueueIcon
							sx={{
								fontSize: mediaQuery800 ? 50 : 30,
								color: 'rgb(147, 204, 245)',
							}}
						/>
						<div className='flex flex-col '>
							<span className='text-black-600 font-bold md:text-xl text-sm'>
								22 / 10 / 2022
							</span>
							<span className='text-slate-600 text-base md:font-thin text-sm'>
								15C
							</span>
						</div>
					</div>

					<div className='flex gap-4 flex-row items-center '>
						<AcUnitIcon
							sx={{
								fontSize: mediaQuery800 ? 50 : 30,
								color: 'rgb(137, 241, 245)',
							}}
						/>
						<div className='flex flex-col'>
							<span className='text-black-600 font-bold md:text-xl text-sm'>
								Snowy
							</span>
							<span className='text-slate-600 text-base md:font-thin text-sm'>
								50%
							</span>
						</div>
					</div>
					<div className='flex gap-4 flex-row items-center '>
						<AirIcon
							sx={{
								fontSize: mediaQuery800 ? 50 : 30,
								color: 'rgb(104, 98, 252)',
							}}
						/>
						<div className='flex flex-col'>
							<span className='text-black-600 font-bold md:text-xl text-sm'>
								MPH West
							</span>
							<span className='text-slate-600 text-base md:font-thin text-sm'>
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
