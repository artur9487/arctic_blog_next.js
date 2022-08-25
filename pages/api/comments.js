/** @format */

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { GraphQLClient, gql, request } from 'graphql-request';

export default async function handler(req, res) {
	const graphQLClient = new GraphQLClient(process.env.API, {
		headers: {
			authorization: TOKEN
		}
	});

	const query = gql`
		mutation CreateCommentss(
			$name: String!
			$email: String!
			$opinion: String!
			$id: ID!
		) {
			createComments(
				data: {
					author: $name
					email: $email
					comment: $opinion
					places: { connect: { id: $id } }
				}
			) {
				id
				author
				email
				comment
			}
		}
	`;

	const result = await graphQLClient.request(query, req.body);
	return res.status(200).send(result);
}
