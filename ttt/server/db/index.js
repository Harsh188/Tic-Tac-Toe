const mongoose = require('mongoose')

mongoose
	.connect('mongodb://127.0.0.1:2017/DBNAME', {useNewUrlParser: true})
	.catch(e=>{
		console.error('Connection error', e.message)
	})

const db = mongoose.connection
module.exports = db