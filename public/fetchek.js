/** @format */

export const handleSubmit = async (obj) => {
	const placesOutput = await fetch('/api/comments', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		},
		body: JSON.stringify(obj)
	});
	return placesOutput.json();
};
