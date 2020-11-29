require('dotenv').config()

module.exports = {
    env: {
        MONGODB_HOTS: process.env.MONGODB_HOTS,
        MONGODB_DATABASE: process.env.MONGODB_DATABASE
    }
}