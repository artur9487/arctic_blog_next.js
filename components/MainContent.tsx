/** @format */

import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import Layout from './Layout';
import ThirdSection from './ThirdSection';
import FooterSection from './FooterSection';
import { Container } from '@mui/material';

const MainContent: React.FC = () => {
	return (
		<>
			<article>
				<Layout>
					<FirstSection />
				</Layout>
				<Layout>
					<SecondSection />
				</Layout>
				<Layout>
					<ThirdSection />
				</Layout>
			</article>
			<footer>
				<Container>
					<FooterSection />
				</Container>
			</footer>
		</>
	);
};

export default MainContent;
