const dotenv = require('dotenv');

// load environment variables
dotenv.config();

module.exports = {
    PORT: process.env.PORT,
}
