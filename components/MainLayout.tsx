/** @format */

import React from 'react';
import { Box } from '@mui/system';
import { Context } from '../ContextComp';
import { useMediaQuery } from '@mui/material';

interface mainLayoutSchema {
	children: JSX.Element;
}

const MainLayout: React.FC<mainLayoutSchema> = ({ children }) => {
	const maxWidth900 = useMediaQuery<string>('(max-width:900px)');
	const maxWidth600 = useMediaQuery<string>('(max-width:600px)');

	return (
		/*<Context.Provider
			value={{
				maxWidth900,
				maxWidth600
			}}>*/
		<Box sx={{ position: 'relative' }}>{children}</Box>
		/*</Context.Provider>*/
	);
};

export default MainLayout;
