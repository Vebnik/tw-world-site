import axios from "axios";

export const getFeed = async () => {
	console.log('Get feed')

	return await (await axios.get('http://localhost:5000/getFeed')).data
}

export const saveFeed = async (data) => {
	console.log('Save feed')

	const config = { headers: {'content-type': 'application/json'} }

	return await (await axios.post('http://localhost:5000/saveFeed', data, config)).data
}