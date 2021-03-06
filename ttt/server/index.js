const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const userRouter = require('./routes/user-router')

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', function(req, res){
	res.send('Hello World!')
})

app.use('/api', userRouter)

app.listen(port, function(){
	console.log(`Server is running on port ${port}`)
})