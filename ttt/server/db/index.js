const mongoose = require('mongoose')

const uri = 'mongodb+srv://zaydb:qwerty_77@cluster0.3dkqi.mongodb.net/zaydb?retryWrites=true&w=majority'

mongoose
	.connect(uri, {useNewUrlParser: true})
	.catch(e=>{
		console.error('Connection error', e.message)
	})

const db = mongoose.connection
module.exports = db