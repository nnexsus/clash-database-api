const express = require("express")
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db.json');

const app = express()

app.use(express.static("public"))
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/api/all", (req, res) => {
    const troops = db
    res.send(troops)
})

app.get("/api/lists", (req, res) => {
    const troops = db.types
    res.send(troops)
})

app.get('/api/troop/:id', (req, res) => {
    const troops = db.troops
    var troopByName = null
    troops.map((troop) => {
        if (troop.name === req.params.id) {
            troopByName = troop
        }
    })
    res.send(troopByName)
})

app.get('/api/troops', (req, res) => {
    const troops = db.troops
    res.send(troops)
})

app.get('/api/hero/:id', (req, res) => {
    const troops = db.heroes
    var troopByName = null
    troops.map((troop) => {
        if (troop.name === req.params.id) {
            troopByName = troop
        }
    })
    res.send(troopByName)
})

app.get('/api/heroes', (req, res) => {
    const troops = db.troops
    res.send(troops)
})

app.get('/api/spell/:id', (req, res) => {
    const troops = db.spells
    var troopByName = null
    troops.map((troop) => {
        if (troop.name === req.params.id) {
            troopByName = troop
        }
    })
    res.send(troopByName)
})

app.get('/api/spells', (req, res) => {
    const troops = db.troops
    res.send(troops)
})

app.get('/api/siege/:id', (req, res) => {
    const troops = db.seigemachines
    var troopByName = null
    troops.map((troop) => {
        if (troop.name === req.params.id) {
            troopByName = troop
        }
    })
    res.send(troopByName)
})

app.get('/api/sieges', (req, res) => {
    const troops = db.troops
    res.send(troops)
})

app.get('/api/pet/:id', (req, res) => {
    const troops = db.pets
    var troopByName = null
    troops.map((troop) => {
        if (troop.name === req.params.id) {
            troopByName = troop
        }
    })
    res.send(troopByName)
})

app.get('/api/pets', (req, res) => {
    const troops = db.troops
    res.send(troops)
})

app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running on port 3000."));