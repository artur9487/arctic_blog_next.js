/** @format */

import Navbar from '../components/Navbar';
import '../styles/globals.css';
import FadeWrapper from '../components/FadeWrapper';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Cool Places Blog</title>
				<link
					href='https://fonts.googleapis.com/css2?family=Beau+Rivage&family=Courgette&family=Dancing+Script:wght@500&family=Playfair+Display:ital@0;1&family=Satisfy&display=swap'
					rel='stylesheet'></link>
			</Head>
			<FadeWrapper>
				<Navbar />
			</FadeWrapper>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
