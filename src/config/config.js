const dotenv = require("dotenv").config()

module.exports = {
    token: process.env.token,
    prefix: '?',
    botAuthor: "GalusGaming",
    botVersion: "1.5v",
    description: "Bot stworzony w celu lepszego poznania JS, oraz na moj server discord",
    mongoPath: process.env.MONGODB_URI
}
