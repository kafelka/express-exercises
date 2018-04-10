const express = require("express")

const app = express()

const mustacheExpress = require('mustache-express')

app.engine('mustache', mustacheExpress())
app.set("view engine", "mustache")
app.set("views", __dirname+"/views")

app.get("/", (req, res) => {
	res.render("page", {
		title: "Welcome to the homepage",
		content: "<p><a href='/plants'>List of plants</a></p>"
	})
})

app.get("/plants", (req, res) => {
	res.render("page", {
		title: "List of plants",
		content: `
			<h1>List of plants</h1>
			<ul>
				<li>Tree</li>
				<li>Herb</li>
				<li>Cactus</li>
				<li>Wild flower</li>
			</ul>
		`
	})
})

app.listen(4000, () => console.log("Listening for connections on port 4000"))
