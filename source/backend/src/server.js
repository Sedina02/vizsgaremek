const express = require('express');
const config =  require('config');
const logger = require('./config/logger');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
mongoose.Promise = global.Promise;

const app = express();

const { host } = config.get('database');
mongoose
    .connect(`mongodb://${host}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        // Data seeds.
        require('./seed/seeder');
        logger.info('MongoDB connection has been established successfully.');
    })
    .catch(err => {
        logger.error(err);
        process.exit();
    });


app.use(cors);
app.use(morgan('combined', { stream: logger.stream }));
app.use(express.static('public'));
app.use(bodyParser.json());


//Recipes
app.use('/appetizer', require('./controller/recipe/router'));
app.use('soup', require('./controller/recipe/router'));
app.use('main-course', require('./controller/recipe/router'));
app.use('dessert', require('./controller/recipe/router'));

app.use((err, req, res, next) => {
    res.status = 500;
    res.json({
        hasError: true,
        message: 'Server Error',
    });
});

module.exports = app;
