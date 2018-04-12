const express = require("express")
const bodyParser = require("body-parser");

const app = express()

// The body-parser is an example of middleware; it amends the incoming req object, adding req.body with appropriate data if it was available
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

const notes = []

app.get("/", (req, res) => {
	res.json(notes)
})


/*
 * Add a POST endpoint here to accept a string and add it to 'notes'
 */


app.listen(4000, () => console.log("Listening for connections on port 4000"))
