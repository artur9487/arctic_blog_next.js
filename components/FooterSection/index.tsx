/** @format */
import React from 'react';

const FooterSection: React.FC = () => {
	return (
		<>
			<div className='w-full h-[200px] bg-slate-100'>
				<div className='flex flex-row justify-between items-center'>
					<div className='w-40 h-28 flex justify-center items-center bg-slate-200'>
						<span className='tracking-widest text-2xl'>
							Subscribe
						</span>
					</div>
					<input
						style={{
							height: 30,
							padding: 25,
							fontFamily: 'Alatsi',
							width: '30%',
						}}
						type='text'
						placeholder='Enter your email'></input>
					<button className='bg-slate-200 py-2 px-6 mr-10'>
						Subscribe
					</button>
				</div>
			</div>
		</>
	);
};

export default FooterSection;
