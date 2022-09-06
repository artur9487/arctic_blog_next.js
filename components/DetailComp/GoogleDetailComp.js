/** @format */

import { Context } from '../../ContextComp';
import { useContext } from 'react';

const GoogleDetailComp = ({ coords }) => {
	const { maxWidth600 } = useContext(Context);
	return (
		<>
			<iframe
				src={coords}
				width='100%'
				height={!maxWidth600 ? 400 : 300}
				loading='lazy'></iframe>
		</>
	);
};

export default GoogleDetailComp;
