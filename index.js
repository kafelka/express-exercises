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

app.get("/plants", (req, res) => {
	res.send(`
		<!DOCTYPE html>
		<html>
			<head>
				<title>Welcome to the homepage</title>
			</head>
			<body>
				<h1>List of plants</h1>
				<ul>
					<li>Tree</li>
					<li>Herb</li>
					<li>Cactus</li>
					<li>Wild flower</li>
				</ul>
				<p><a href='/'>Home</a></p>
			</body>
		</html>
	`)
})

app.get("/plants/:plantName", (req, res) => {

	const validPlants = [
		{
			name: "Tree",
			description: "Tall plant with trunk and branches"
		},
		{
			name: "Herb",
			description: "Short plant, found on fields"
		},
		{
			name: "Cactus",
			description: "Prickly"
		},
		{
			name: "Wild flower",
			description: "Like a domestic flower, but badly behaved"
		}
	]

	const plant = validPlants.find(plant => plant.name.toLowerCase() == req.params.plantName)
	if (!plant) {
		res.status(404).send(`
			<!DOCTYPE html>
			<html>
				<head>
					<title>Plant not found</title>
				</head>
				<body>
					<h1>Plant not found</h1>
					<p>The specified plant was not found in the system</p>
				</body>
			</html>
		`)
		return
	}

	res.send(`
		<!DOCTYPE html>
		<html>
			<head>
				<title>${plant.name}</title>
			</head>
			<body>
				<h1>${plant.name}</h1>
				<p>${plant.description}</p>
				<p><a href='/'>Home</a></p>
			</body>
		</html>
	`)
})

app.post("/plants", (req, res) => {
	res.send(`
		<!DOCTYPE html>
		<html>
			<head>
				<title>Thank you</title>
			</head>
			<body>
				<p>Thank you for submitting a new plant!</p>
				<p><a href='/'>Home</a></p>
			</body>
		</html>
	`)	
})

app.listen(4000, () => console.log("Listening for connections on port 4000"))
