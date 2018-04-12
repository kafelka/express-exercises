const express = require("express")

const app = express()

app.use((req, res, next) => {
	console.log(`${new Date} ${req.method} ${req.url}`)
	next()
})

app.get("/", (req, res) => {
	res.send("Hello, World!")
})


app.listen(4000, () => console.log("Listening for connections on port 4000"))
