const express = require('express');
const config =  require('config');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
mongoose.Promise = global.Promise;

const app = express();

const { host, user, pass } = config.get('database');
mongoose.connect(`mongodb+srv://${host}`, {
    user,
    pass,
}).then(
    conn => {
        console.log('Database is seeded!');
    },
).catch(
    err => console.error(err),
);

// Cross origin resource sharing: CORS 
app.use(cors);
app.use(express.static('public'));
app.use(bodyParser.json());


//Recipes
app.use('/recipe', require('./controller/recipe/router'));

app.use((err, req, res, next) => {
    res.status = 500;
    res.json({
        hasError: true,
        message: 'Server Error',
    });
});

module.exports = app;
