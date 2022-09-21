/** @format */

import { useContext } from 'react';
import { Context } from '../ContextComp';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import Layout from './Layout';
import ThirdSection from './ThirdSection';

const MainContent = () => {
	const { type, maxWidth900, maxWidth600 } = useContext(Context);

	return (
		<>
			<Layout>
				<FirstSection />
			</Layout>
			<Layout>
				<SecondSection />
			</Layout>
			<Layout>
				<ThirdSection />
			</Layout>
		</>
	);
};

export default MainContent;
