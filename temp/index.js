const express = require("express")
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.urlencoded({
	extended:true
}))

app.get("/", function(req,res){
	res.sendFile(__dirname +"/auth.html");
});

app.post("/", function(req,res){
	var usr = String(req.body.username);
	var psw = String(req.body.password);

	var result = usr+psw;

	res.send("Result - " + result);
});

app.listen(8000, () =>{
	console.log('Server is running on port 8000')
});
