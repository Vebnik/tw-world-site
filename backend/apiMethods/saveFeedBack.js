
const tmp = []

const saveFeed = async (data) => {
	try {
		tmp.push(data)
		return true
	} catch (e) { return false }
}


module.exports = { saveFeed }