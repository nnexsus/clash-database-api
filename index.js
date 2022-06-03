const express = require("express")
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('db.json');

const app = express()

app.use(express.static("public"))
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/api/troops", (req, res) => {
    const troops = db.troops
    res.send(troops)
})

app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running on port 3000."));