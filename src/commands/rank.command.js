const levels = require('discord-xp')
const { Message } = require('discord.js')
const fetch = require('node-fetch')


const { mongoPath } = require('../config/config')
levels.setURL(mongoPath)


module.exports = {
    name:"rank",
    description:"tested permission",
    
    

    async run (msg, args) {
        const user = await levels.fetch(msg.author.id)
        Message.channel.send(`**obecnie posiadasz ${user.level} poziom!**`)
    },
}