const {ClientUser,MessageEmbed, Permissions: {FLAGS} } = require("discord.js")
module.exports = {
  name: "ban",
  description: "baning  members",
  args: true,
  usage: "<person>",
  botPermissions: [FLAGS.BAN_MEMBERS],
  userPermissions: [FLAGS.BAN_MEMBERS],

  run(msg, args) {
    
    author = msg.author 
    avatar = author.displayAvatarURL()
    const {channel,} = msg
 if (!msg.guild) return
    const {guild} = msg
    const DelEl = args.shift()
    const relese = args.join(" ")
    const user = msg.mentions.users.first()


    const embed = new MessageEmbed()
    .setTitle('Użytkownik Zbanowany!')
    .setColor(0xFF0000)
    .setThumbnail(avatar)
    .addField('Administartor:', author)
    .addField('Użytkownik:',user)
    .addField('powód:',relese,)
    .setImage('https://i.ibb.co/9bXJs6J/ban2.gif')

    if (user) {

      

      const member = guild.member(user)
      if (member) {

        member
          .ban({
            reason: 'They were bad!',
          })
          .then(() => {
           
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
