const express = require("express")

const app = express()

app.get("/", (req, res) => {
	res.send(`
		<!DOCTYPE html>
		<html>
			<head>
				<title>Welcome to the homepage</title>
			</head>
			<body>
				<p>Welcome!</p>
			</body>
		</html>
	`)
})

app.listen(4000, () => console.log("Listening for connections on port 4000"))
