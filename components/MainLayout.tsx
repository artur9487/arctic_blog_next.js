/** @format */

import React from 'react';
import { Box } from '@mui/system';
import { Context } from '../ContextComp';
import { useMediaQuery } from '@mui/material';

const MainLayout = (props) => {
	const maxWidth900 = useMediaQuery('(max-width:900px)');
	const maxWidth600 = useMediaQuery('(max-width:600px)');

	return (
		<Context.Provider
			value={{
				maxWidth900,
				maxWidth600
			}}>
			<Box sx={{ position: 'relative' }}>{props.children}</Box>
		</Context.Provider>
	);
};

export default MainLayout;
