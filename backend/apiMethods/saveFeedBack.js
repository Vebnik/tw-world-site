const {GetDataBase} = require("../dbWork/createConnect")


const saveFeed = async (data) => {
	try {
		const db = new GetDataBase('feedSource')

		const prom = new Promise(resolve => {
			db.saveData(data, 'feedback_data')
				.catch(err => console.log(err))
		})

		await Promise.all([prom])
		return true
	} catch (e) { return false }
}


module.exports = { saveFeed }