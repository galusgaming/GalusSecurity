const { GuildMember, Channel, Guild } = require("discord.js");
const { Permissions: {FLAGS} } = require("discord.js");
module.exports = {
    name:"test",
    description:"tested permission",

    run (msg) {
        const {channel, member, guild} = msg
        author = msg.author 

        console.log(
            "bot",
            guild.me.permissionsIn(channel).has([FLAGS.MANAGE_MESSAGES])
        )

        console.log(
            "user",
            member.permissionsIn(channel).has([FLAGS.MANAGE_MESSAGES])
        )
        if (!member.permissionsIn(channel).has([FLAGS.MANAGE_MESSAGES])) {
            return channel.send( `${author} nie masz permisjii, żeby użyć tej komendy!`)
            
        }
    },
}