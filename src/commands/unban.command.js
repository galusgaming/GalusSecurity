const { Permissions: {FLAGS} } = require("discord.js")
module.exports = {
  name: "unban",
  description: "unbaning  members",
  args: true,
  usage: "<person>",
  botPermissions: [FLAGS.BAN_MEMBERS],
  userPermissions: [FLAGS.BAN_MEMBERS],

  run(msg, args) {
    
    const {channel} = msg
    let userID = args[0]
    msg.guild.fetchBans().then(bans=> {
    if(bans.size == 0) return 
    let bUser = bans.find(b => b.user.id == userID)
    if(!bUser) return
    msg.guild.members.unban(bUser.user)
    msg.channel.send(`Użytkownik o ID <@${userID}> Został odbanowany!`)
    })
  },
}
