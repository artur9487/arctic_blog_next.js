/** @format */

import { Context } from '../../ContextComp';
import { useContext } from 'react';

const GoogleDetailComp = ({ coords }) => {
	const { matches3 } = useContext(Context);
	return (
		<>
			<iframe
				src={coords}
				width='100%'
				height={!matches3 ? 400 : 300}
				loading='lazy'></iframe>
		</>
	);
};

export default GoogleDetailComp;
