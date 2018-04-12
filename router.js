const express = require("express")
const app = express()
const minerals = require("./minerals.js")

app.use("/minerals", minerals)

app.listen(4000, () => console.log("Listening for connections on port 4000"))
