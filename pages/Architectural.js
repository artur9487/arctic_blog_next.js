/** @format */

import MainContent from '../components/MainContent';
import MainLayout from '../components/MainLayout';
import { gql, request } from 'graphql-request';

const Architectural = ({ result, result2, result3 }) => {
	return (
		<MainLayout
			result={result}
			result2={result2}
			result3={result3}
			type='category'>
			<MainContent />
		</MainLayout>
	);
};

export async function getStaticProps(context) {
	const slug = 'Architectural';
	const url = process.env.API;

	const query = gql`
		query ($slug: String!) {
			placesSConnection(where: { category: $slug }) {
				edges {
					node {
						id
						photo {
							url
						}
						placeName
						createdAt
						commentS {
							id
						}
					}
				}
			}
		}
	`;

	const variabless = { slug };

	const proResult = await request(url, query, variabless);
	const result = proResult.placesSConnection.edges;

	const query2 = gql`
		query PlaceQuery {
			placesSConnection {
				edges {
					node {
						category
						id
					}
				}
			}
		}
	`;
	const proResult3 = await request(url, query2);
	const proResult4 = proResult3.placesSConnection.edges;
	const values = proResult4.map((item) => {
		return item.node.category;
	});
	let result2 = [...new Set(values)];

	let values2 = result.map((item) => {
		return { place: item.node.id, count: item.node.commentS.length };
	});

	let result3 = [];

	const fetch1 = async () => {
		let temp1 = -1;
		let place1 = '';

		values2.map((item) => {
			if (temp1 < item.count) {
				temp1 = item.count;
				place1 = item.place;
			}
		});

		const indx1 = values2.findIndex((item) => item.place === place1);
		values2.splice(indx1, 1);

		const query3 = gql`
			query PlaceQuery($place1: ID!, $slug: String!) {
				placesSConnection(where: { id: $place1, category: $slug }) {
					edges {
						node {
							placeName
							createdAt
							id
							photo {
								url
							}
						}
					}
				}
			}
		`;
		const variables = { place1, slug };
		const proResult5 = await request(url, query3, variables);
		const proResult6 = proResult5.placesSConnection.edges;
		result3.push({ ...proResult6, count: temp1 });
	};

	await fetch1();
	if (values2.length > 0) {
		await fetch1();
		if (values2.length > 0) {
			await fetch1();
		}
	}

	return {
		props: { result, result2, result3 }
	};
}

export default Architectural;
