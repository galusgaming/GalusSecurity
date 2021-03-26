const { GuildMember, Channel, Guild } = require("discord.js");
const { Permissions: {FLAGS} } = require("discord.js");
const { args } = require("./ban.command");
module.exports = {
    name:"test",
    description:"tested permission",
    args: true,
    

    run (msg, args) {
        user = msg.mentions.users.first();
        console.log(user)
        const {channel, member, guild} = msg
        author = msg.author
        avatar = user.displayAvatarURL({size: 256 })
        msg.channel.send(avatar)
    },
}