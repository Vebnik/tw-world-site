const express = require('express')
const cors = require('cors');
const {getFeed} = require("./apiMethods/getFeedBack");
const {saveFeed} = require("./apiMethods/saveFeedBack");
const {json} = require("express");

const app = express()


const createServer = () => {
	app.use(cors())
	app.use(json())

	app.get('/getFeed', function (req, res) {
		getFeed().then(data => res.send(data))
	})

	app.post('/saveFeed', function (req, res) {
		saveFeed(req.body).then(ok => ok ? res.send({status: 200}) : {status: 401})
	})

	app.listen(5000).addListener('listening', ev => console.log(`Server listen on ${5000}`))

}; createServer()