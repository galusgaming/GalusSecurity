const { MessageEmbed, Permissions: {FLAGS} } = require("discord.js")
module.exports = {
  name: "unban",
  description: "unbaning  members",
  args: true,
  usage: "<member>",
  botPermissions: [FLAGS.BAN_MEMBERS],
  userPermissions: [FLAGS.BAN_MEMBERS],

  run(msg, args) {
    let userID = args[0]
    author = msg.author
    const {channel} = msg
 if (!msg.guild) return
    const {guild} = msg
    const DelEl = args.shift()
    const relese = args.join(" ")
    const user = msg.mentions.users.first()
    avatar = author.displayAvatarURL({size: 256 })
    
    const errMsg = new MessageEmbed()
    .setTitle("Błąd!")
    .setDescription("**Ten użytkownik nie jest zbanowany!**")
    .setColor(0x00abff)

    
    const embedUb = new MessageEmbed()
    .setTitle('Użytkownik Odbanowany!')
    .setColor(0x00ff00)
    .setThumbnail(avatar)
    .addField('Administartor:', author)
    .addField('Użytkownik:',`<@${userID}>`)
    .setImage('https://i.ibb.co/NSnTnwv/giphy.gif')

    msg.guild.fetchBans().then(bans=> {
    if(bans.size == 0) return msg.channel.send(errMsg)
    let bUser = bans.find(b => b.user.id == userID)
    if(!bUser) return 
    msg.guild.members.unban(bUser.user)
    msg.channel.send(embedUb)
    })
  },
}
