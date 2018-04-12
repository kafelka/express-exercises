const express = require("express")

const app = express()

const mustacheExpress = require('mustache-express')

app.engine('mustache', mustacheExpress())

// The following two lines are wrong.  You should correct them.
app.set("view engine", "handlebars")
app.set("views", __dirname+"/templates")

app.get("/", (req, res) => {
	res.render("page", {
		title: "Welcome to the homepage",
		content: `
			<p><a href='/plants'>List of plants</a></p>
			<p><a href='/animals'>List of animals</a></p>
		`
	})
})

// Can you rewrite this to use the Mustache partials, like the route for 'animals'?
app.get("/plants", (req, res) => {
	res.render("page", {
		pageTitle: "List of plants",
		content: `
			<h1>List of plants</h1>
			<ul>
				<li>Tree</li>
				<li>Herb</li>
				<li>Cactus</li>
				<li>Wild flower</li>
			</ul>
			<p><a href='/'>Home</a></p>
		`
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

// Add some more templates to the project, and experiment with using them

app.listen(4000, () => console.log("Listening for connections on port 4000"))
