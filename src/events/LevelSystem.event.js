const levels = require('discord-xp')

const { mongoPath } = require('../config/config')

levels.setURL(mongoPath)

module.exports = {
    name: "message",
    async run(message) {

      /*  const randomXP = Math.floor(Math.random()*9)+1

        const hasleveledUp = await levels.appendXp(message.author.id, message.guild.id, randomXP)
        if (hasleveledUp) {
            const user = await levels.fetch(message.author.id, message.guild.id)
            message.channel.send(`brawo ${user.tag}!👏 awansowałeś na ${user.level} poziom! Tak trzymaj!`)
        }

*/
    }
}