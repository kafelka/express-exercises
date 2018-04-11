const express = require("express")
const bodyParser = require("body-parser");

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const notes = []

app.get("/", (req, res) => {
	res.json(notes)
})

app.post("/", (req, res) => {
	if (req.body && req.body.text && typeof req.body.text == "string") {
		notes.push(req.body.text)
	}
	res.json(notes)
})

app.listen(4000, () => console.log("Listening for connections on port 4000"))
