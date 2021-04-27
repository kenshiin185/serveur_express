const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const players = require('./players');
const path = require('path');


app.use(cors({credentials:true, origin:'http://localhost:4200'}));



/***middlewares******************* */
app.get('/test', (req,res) => {
    res.status(200).json({ message: 'Connexion de test réussie :)!!!!!!!!!'});
});

app.use(bodyParser.json());

module.exports = app;