const {ClientUser,MessageEmbed, Role, Permissions: {FLAGS} } = require("discord.js")
const ms = require('ms')
module.exports = {
  name: "tempmute",
  description: "IT'S TIME TO STOP!",
  args: true,
  usage: "<member>",
  botPermissions: [FLAGS.MANAGE_ROLES],
  userPermissions: [FLAGS.MANAGE_ROLES],

  run(msg, args) {

    author = msg.author
    const {channel,} = msg
 if (!msg.guild) return
    const {guild} = msg
    let relese = args.join(" ")
    const user = msg.mentions.users.first()
    
    if (args.length<[3]){
      relese = `\`nie podano agrumentów!\``
    }
    if (args.length>[2]){
      relese = args.slice(2).join(" ")
    }
    
  if (user) {
     
      const target = msg.mentions.users.first()
      if (target) {
            let muteRole = msg.guild.roles.cache.find(role => role.name === 'Wyciszony/a' )
            let avatar = target.displayAvatarURL({size: 256})
            const embed = new MessageEmbed()
            .setTitle('Użytkownik Wyciszony!')
            .setColor(0x0000FF)
            .setThumbnail(avatar)
            .addField('Administartor:', author)
            .addField('Użytkownik:',target)
            

            let memberTarget= msg.guild.members.cache.get(target.id)

            if (!muteRole){
              msg.guild.roles.create({
                  data: {
                      name:'Wyciszony/a',
                      color:'RED',
                      permissions: (FLAGS.SEND_MESSAGES, false)
                  },
                  reason: 'Stworzony do wyciszania osób' 
              })
              msg.reply('rola "Wyciszony/a" została utworzona! Teraz wpisz ponownie tą komende, aby przydzielić mute')
              return
            }

            if (!args[1]) {
              return
          }
          memberTarget.roles.add(muteRole.id);
          embed.addField("czas: ", ms(ms(args[1]))).addField('powód:',relese)
          msg.channel.send(embed)
          setTimeout(function () {
            memberTarget.roles.remove(muteRole.id);
            
        }, ms(args[1]));
    }
  }
    else {        
      msg.reply("Ten użytkownik nie jest w gildii!")
    }
  },
}
