//all express experiments go in /express/name_of_experiment
//all random experiments go in express/server.js

const express = require('express') //require is used to import modules
const app = express()

app.get('/testing', (req,res) => res.send("hello word")) //this is a simple route at /testing
app.listen(3000,() => console.log("this is the server"))
app.get('/abhi', (req,res) => res.status(404).send("404"))
