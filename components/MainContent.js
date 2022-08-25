/** @format */

import { Grid, Box } from '@mui/material';
import CardContent from './CardContent';
import CategoriesBar from './CategoriesBar';
import MostComPosts from './MostComPosts';
import Stack from '@mui/material/Stack';
import { useContext } from 'react';
import FadeWrapper from './FadeWrapper';
import ViewMoreButton from './ViewMoreButton';
import { Context } from '../ContextComp';
import styles from '/styles/Home.module.scss';

const MainContent = () => {
	const { type, matches, matches3 } = useContext(Context);

	return (
		<Grid
			className={styles.fade1}
			justifyContent='center'
			rowSpacing={!matches ? 0 : 3}
			container
			direction={!matches ? 'row' : 'column-reverse'}
			sx={{ width: '100%', position: 'relative' }}>
			<Grid item xs={4} md={8} container justifyContent='center'>
				<CardContent />
				{type === 'all' ? (
					<FadeWrapper>
						<ViewMoreButton matches={matches} />
					</FadeWrapper>
				) : null}
			</Grid>
			<Grid
				sx={{
					position: 'relative',
					minHeight: !matches ? '100vh' : '35vh'
				}}
				xs={4}
				md={4}
				item
				container>
				<Stack
					className={styles.fade600}
					direction={!matches ? 'column' : 'row'}
					justifyContent={!matches ? 'flex-start' : 'center'}
					alignItems={!matches ? 'initial' : 'flex-start'}
					sx={{
						width: !matches ? 'initial' : '100%',
						position: !matches ? 'fixed' : 'relative'
					}}
					spacing={3}>
					<Stack
						spacing={3}
						direction={!matches3 ? (!matches ? 'column' : 'row') : 'column'}>
						<FadeWrapper>
							<MostComPosts />
						</FadeWrapper>
						<FadeWrapper>
							<CategoriesBar />
						</FadeWrapper>
					</Stack>
				</Stack>
			</Grid>
		</Grid>
	);
};

export default MainContent;
