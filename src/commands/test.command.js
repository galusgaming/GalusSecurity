const { GuildMember, Channel, Guild } = require("discord.js");
const { Permissions: {FLAGS} } = require("discord.js");
module.exports = {
    name:"test",
    description:"tested permission",
    

    run (msg) {
        const {channel, member, guild} = msg
        author = msg.author
        
        msg.channel.send(avatar)
    },
}