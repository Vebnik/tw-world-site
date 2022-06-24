const sqlite3 = require('sqlite3').verbose()


class GetDataBase {

	#dbName
	#dbInstance

	constructor(dbName) {
		this.#dbName = dbName
		this.#dbInstance = new sqlite3.Database(dbName)
	}

	createTable(tableName) {
		this.#dbInstance.run(`CREATE TABLE ${tableName} (feed_item JSON)`)
	}

	async saveData(data, tableName) {
		const stmt = this.#dbInstance.prepare(`INSERT INTO ${tableName} VALUES (?)`)

		stmt.run(JSON.stringify(data))
		stmt.finalize()
	}

	async getData(tableName) {
		const prom = new Promise(resolve => {
			this.#dbInstance.all(`SELECT * FROM ${tableName}`, (err, row) =>
				resolve(row.map(el => JSON.parse(el.feed_item))))
		})

		await Promise.all([prom])
		return prom
	}

}


module.exports = { GetDataBase }

