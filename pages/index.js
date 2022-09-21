/** @format */

import MainContent from '../components/MainContent';
import React from 'react';
import MainLayout from '../components/MainLayout';

const Home = ({ mainPlacesOutput }) => {
	return (
		<MainLayout mainPlacesOutput={mainPlacesOutput}>
			<MainContent />
		</MainLayout>
	);
};

export default Home;
