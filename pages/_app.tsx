/** @format */

import '../styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Cool Places Blog</title>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link
					href='https://fonts.googleapis.com/css2?family=Alatsi&display=swap'
					rel='stylesheet'
				/>

				<link
					href='https://fonts.googleapis.com/css2?family=Alatsi&family=Alumni+Sans:wght@100&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
