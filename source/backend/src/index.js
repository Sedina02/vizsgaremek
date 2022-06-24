require('dotenv').config();
const config = require('config');
const logger = require('./config/logger');
const app = require('./server');
const port = process.env.port || 3000;

if (!config.has('database')) {
    logger.error('No database config found.');
    process.exit();
}

app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`);
});