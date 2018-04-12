const express = require("express")

const app = express()

const mustacheExpress = require('mustache-express')

app.engine('mustache', mustacheExpress())
app.set("view engine", "mustache")
app.set("views", __dirname+"/views")

app.get("/", (req, res) => {
	res.render("page", {
		title: "Welcome to the homepage",
		content: `
			<p><a href='/plants'>List of plants</a></p>
			<p><a href='/animals'>List of animals</a></p>
		`
	})
})

app.get("/plants", (req, res) => {
	res.render("plantspage", {
		pageTitle: "List of plants",
		"mainHeading": "List of plants",
		"items": [
			{ label: "Tree" },
			{ label: "Herb" },
			{ label: "Cactus" },
			{ label: "Wild flower" }
		]
	})
})

app.get("/animals", (req, res) => {
	res.render("animalspage", {
		"pageTitle": "List of animals",
		"mainHeading": "List of animals",
		"items": [
			{ label: "Invertebrates" },
			{ label: "Fish" },
			{ label: "Reptiles" },
			{ label: "Mammals" }
		]
	})
})

app.listen(4000, () => console.log("Listening for connections on port 4000"))
