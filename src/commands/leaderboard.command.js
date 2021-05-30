const levels = require('discord-xp')
const { Message, Client } = require('discord.js')
const client = Client

const { mongoPath } = require('../config/config')
levels.setURL(mongoPath)


module.exports = {
    name:"leaderboard",
    description:"tested permission",

    

    async run (msg, args) {
        const rawLeaderboard = await levels.fetchLeaderboard(msg.id, 5)
        if (rawLeaderboard.length < 1) return reply("W tabeli są pustki! nikt obecnie nie znajduje sie w niej!")

        const leaderboard = levels.computeLeaderboard(client, rawLeaderboard)
        const lb = leaderboard.map(e => `${e.position}. ${e.username}#${discriminator}\n Level:${e.level}\nXP: ${e.xp.toLocaleString()}`)
    
        msg.channel.send(`${lb.join("\n\n")}`)
    },
}