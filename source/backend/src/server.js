const express = require('express');
const config =  require('config');
const logger = require('./config/logger');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//HKNfxmQumgXhZQ

const swaggerDocument = YAML.load('./docs/swagger.yaml');

const { host } = config.get('database');
mongoose
    .connect(host, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        logger.info('MongoDb is connected!')
    })
    .catch(err => {
        logger.error(err);
        process.exit();
    });


app.use(cors());
app.use(morgan('combined', { stream: logger.stream }));
app.use(express.static('public'));
app.use(bodyParser.json());

const authenticateJwt = require('./models/auth/authenticate');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/recipe', require('./controller/recipe/router'));
app.use('/ingredient', authenticateJwt, require('./controller/ingredient/router'));
app.use('/login', require('./controller/login/router'));


// app.use('/soup', require('./controller/recipe/router'));
// app.use('/main-course', require('./controller/recipe/router'));
// app.use('/dessert', require('./controller/recipe/router'));

app.use('/', (req, res) => {
    console.log(req.url);
    res.send('api server');
});

app.use((err, req, res, next) => {
    res.status = 500;
    res.json({
        hasError: true,
        message: 'Server Error',
    });
});

module.exports = app;
