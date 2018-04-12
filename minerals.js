const express = require("express")
const router = express.Router()

router.get("/solid", (req, res) => {
	res.send("<ul><li>Calcium</li><li>Iron</li></ul>")
})

router.get("/gas", (req, res) => {
	res.send("<ul><li>Hydrogen</li><li>Nitrogen</li></ul>")
})

module.exports = router
