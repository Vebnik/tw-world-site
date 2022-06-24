const { GetDataBase } = require('../dbWork/createConnect')


const getFeed = async () => {
	const db = new GetDataBase('feedSource')

	const prom = new Promise(resolve => {
		db.getData('feedback_data').then(data =>
			resolve(JSON.stringify(data)))
	})

	await Promise.all([prom])
	return prom
}


module.exports = { getFeed }