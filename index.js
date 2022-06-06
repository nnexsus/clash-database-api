const express = require("express")
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db.json');
const bdb = require('./bdb.json');

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

app.get('/api/super/:id', (req, res) => {
    const troops = db.super
    var troopByName = null
    troops.map((troop) => {
        if (troop.name === req.params.id) {
            troopByName = troop
        }
    })
    res.send(troopByName)
})

app.get('/api/supers', (req, res) => {
    const troops = db.super
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

app.get('/api/defense/:id', (req, res) => {
    const troops = bdb.defensive
    var troopByName = null
    troops.map((troop) => {
        if (troop.name === req.params.id) {
            troopByName = troop
        }
    })
    res.send(troopByName)
})

app.get('/api/defenses', (req, res) => {
    const troops = bdb.defensive
    res.send(troops)
})

app.get('/api/trap/:id', (req, res) => {
    const troops = bdb.defensive
    var troopByName = null
    troops.map((troop) => {
        if (troop.name === req.params.id) {
            troopByName = troop
        }
    })
    res.send(troopByName)
})

app.get('/api/traps', (req, res) => {
    const troops = bdb.defensive
    res.send(troops)
})

app.get('/api/army/:id', (req, res) => {
    const troops = bdb.army
    var troopByName = null
    troops.map((troop) => {
        if (troop.name === req.params.id) {
            troopByName = troop
        }
    })
    res.send(troopByName)
})

app.get('/api/army', (req, res) => {
    const troops = bdb.army
    res.send(troops)
})

app.get('/api/types', (req, res) => {
    const troops = bdb.types
    res.send(troops)
})

app.get('/api/walls', (req, res) => {
    const troops = bdb.walls
    res.send(troops)
})

app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running on port 3000."));