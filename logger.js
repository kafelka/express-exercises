const express = require("express")

const app = express()

app.use(/* Add your middleware here */)

app.get("/", (req, res) => {
	res.send("Hello, World!")
})


app.listen(4000, () => console.log("Listening for connections on port 4000"))
