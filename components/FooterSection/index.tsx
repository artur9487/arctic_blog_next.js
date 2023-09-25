/** @format */
import React from 'react';

const FooterSection: React.FC = () => {
	return (
		<>
			<div className='w-full md:h-[200px] h-[150px] bg-slate-100'>
				<div className='flex flex-row justify-between  w-full h-full'>
					<div className='px-4 py-4  flex justify-center items-center bg-slate-200'>
						<span className='tracking-widest md:text-xl text-base font-bold'>
							Subscribe
						</span>
					</div>
					<form className='font-alumni h-full gap-4 flex  mx-auto items-center justify-center flex-col w-1/2'>
						<input
							className='h-[30px] p-4 w-full'
							type='text'
							placeholder='Enter your email'
						/>
						<button className='bg-slate-200 py-2 px-6 text-sm '>
							OK
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default FooterSection;
