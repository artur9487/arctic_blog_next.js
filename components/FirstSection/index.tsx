/** @format */
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
				<div className='py-12 px-8 gap-3 drop-shadow-lg rounded-xl justify-start items-start flex flex-col bg-white absolute -left-28 -bottom-28'>
					<div className='flex gap-4 flex-row items-center '>
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

					<div className='flex gap-4 flex-row items-center '>
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
					<div className='flex gap-4 flex-row items-center '>
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
