/** @format */

import { Container } from '@mui/material';

interface layoutSchema {
	children: JSX.Element;
}

const Layout: React.FC<layoutSchema> = ({ children }) => {
	return <Container sx={{ mb: 13 }}>{children}</Container>;
};

export default Layout;
