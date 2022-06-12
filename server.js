
const overviewJson = require('./data/overview.json')
const express = require('express');
const bodyParser = require('body-parser'); // latest version of epxressJS now comes with Body-Parser!
const cors = require('cors');

const app = express();

app.use(cors())
app.use(express.json()); // latest version of exressJS now comes with Body-Parser!

function validateIndex(index, maxLength, res) {
    if (isNaN(index)) {
        res.status(404).send('Value for index must be a number.');
    }
    else if (index >= maxLength) {
        res.status(404).send('Index ' + index.toString() + " is out of bounds. Index must be less than " + maxLength.toString());
    }
}

// Get All info
app.get('/all', (req, res) => {
    res.send(overviewJson)
})

// Get Game Overview
app.get('/overview', (req, res) => {
    res.send(JSON.stringify({ "overview": overviewJson.overview }))
})

// Get Contents
app.get('/contents', (req, res) => {
    res.send(JSON.stringify({ "contents": overviewJson.contents }))
})

app.get('/contents/:index', (req, res) => {

    validateIndex(req.params.index, overviewJson.contents.length, res)

    res.send(overviewJson.contents.at(req.params.index))
})

// Setup
app.get('/setup', (req, res) => {
    res.send(JSON.stringify({ "setup": overviewJson.setup }))
})

app.get('/setup/steps', (req, res) => {
    res.send(JSON.stringify({ "steps": overviewJson.setup.steps }))
})

app.get('/setup/steps/:index', (req, res) => {

    validateIndex(req.params.index, overviewJson.setup.steps.length, res)
    
    res.send(overviewJson.setup.steps.at(req.params.index))
})

// Playing the Game
app.get('/playing-the-game', (req, res) => {
    res.send(JSON.stringify({ "playingTheGame": overviewJson.playingTheGame }))
})

// Cards
app.get('/cardEffects', (req, res) => {
    res.send(JSON.stringify({ "cardEffects": overviewJson.cardEffects }))
})

app.get('/cardEffects/cards', (req, res) => {
    res.send(JSON.stringify({ "cards": overviewJson.cardEffects.cards }))
})

app.get('/cardEffects/cards/:index', (req, res) => {

    validateIndex(req.params.index, overviewJson.cardEffects.cards.length, res)
    
    res.send(overviewJson.cardEffects.cards.at(req.params.index))
})

// TODO (bdang) Need to change 3001 to something different
app.listen(3001, () => {
    console.log('Backend Server is listening to port 3001');
})