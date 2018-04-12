const express = require("express")
const bodyParser = require("body-parser");

const app = express()

// Amend the following two lines to apply the bodyParser middleware to every incoming request
bodyParser.json()
bodyParser.urlencoded()

const notes = []

app.get("/", (req, res) => {
	res.json(notes)
})


/*
 * Add a POST endpoint here to accept a string and add it to 'notes'
 */


app.listen(4000, () => console.log("Listening for connections on port 4000"))
