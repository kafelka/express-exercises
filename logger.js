const express = require("express")

const app = express()

app.use(/* Add some middleware here that logs the time of EVERY request */)

/* Add some middleware here that logs the time of GET requests only */

/* Add some middleware here that logs the time POST requests only */

app.get("/", (req, res) => {
	res.send("Hello, World!")
})


app.listen(4000, () => console.log("Listening for connections on port 4000"))
