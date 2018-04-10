const express = require("express")

const app = express()

app.get("/", (req, res) => {
	res.send("Welcome to the homepage")
})

app.get("/plants", (req, res) => {
	res.send(`
		<!DOCTYPE html>
		<html>
			<head>
				<title>List of plants</title>
			</head>
			<body>
				<h1>List of plants</h1>
				<ul>
					<li>Tree</li>
					<li>Herb</li>
					<li>Cactus</li>
					<li>Wild flower</li>
				</ul>
			</body>
		</html>
	`)
})

app.listen(4000, () => console.log("Listening for connections on port 4000"))
