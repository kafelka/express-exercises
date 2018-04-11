const express = require("express")

const app = express()

const mustacheExpress = require('mustache-express')

app.engine('mustache', mustacheExpress())
app.set("view engine", "mustache")
app.set("views", __dirname+"/views")

const render = (res, template, vars) => {
	return new Promise((resolve, reject) => {
		res.render(template, vars, (err, html) => {
			if (err) {
				reject(err)
			} else {
				resolve(html)
			}
		})
	})
}

/**
 * This function creates an object from two arrays
 */
const arrayCombine = (keys, values) => Object.assign( ...keys.map( (v, i) => ( {[v]: values[i]} ) ) )

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
			<p><a href='/'>Home</a></p>
		`
	})
})

app.get("/animals", (req, res) => {

	const pageParts = {
		"heading": render(res, "pageheading", {
			headingText: "List of animals"
		}),
		"list": render(res, "list", {
			items: [
				{ label: "Invertebrates" },
				{ label: "Fish" },
				{ label: "Reptiles" },
				{ label: "Mammals" }
			]
		}),
		"homelink": render(res, "homelink")
	}

	Promise.all(Object.values(pageParts))
	.then(html => {
		const pageHtml = arrayCombine(Object.keys(pageParts), html)

		res.render("page", {
			title: "List of animals",
			content: `
				${pageHtml.heading}
				${pageHtml.list}
				${pageHtml.homelink}
			`
		})
	})
})

app.listen(4000, () => console.log("Listening for connections on port 4000"))
