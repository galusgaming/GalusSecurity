const {ClientUser,MessageEmbed, Permissions: {FLAGS} } = require("discord.js")
module.exports = {
  name: "ban",
  description: "baning  members",
  args: true,
  usage: "<member>",
  botPermissions: [FLAGS.BAN_MEMBERS],
  userPermissions: [FLAGS.BAN_MEMBERS],

  run(msg, args) {

    author = msg.author
    const {channel,} = msg
 if (!msg.guild) return
    const {guild} = msg
    const DelEl = args.shift()
    let relese = args.join(" ")
    const user = msg.mentions.users.first()
    const avatar = user.displayAvatarURL({size: 256})
    if (args.length<[1]){
      relese = `\`nie podano agrumentów!\``
    }
   if (user) {
      const member = guild.member(user)
      if (member) {
        const avatar = user.displayAvatarURL({size: 256})
        const embed = new MessageEmbed()
        .setTitle('Użytkownik Zbanowany!')
        .setColor(0xFF0000)
        .setThumbnail(avatar)
        .addField('Administartor:', author)
        .addField('Użytkownik:',user)
        .addField('powód:',relese)
        .setImage('https://i.ibb.co/9bXJs6J/ban2.gif')

        member
          .ban({ reason: relese,}).then(() => {
            msg.channel.send(embed)
          })
          .catch(err => {          
            msg.reply('I was unable to ban the member')            
            console.error(err);
          });
      } else {        
        msg.reply("That user isn't in this guild!")
      }
    } else {      
      msg.reply("You didn't mention the user to ban!")
    }
  },
}
