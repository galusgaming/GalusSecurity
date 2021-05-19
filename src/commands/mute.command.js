const {ClientUser,MessageEmbed, Role, Permissions: {FLAGS} } = require("discord.js")
module.exports = {
  name: "mute",
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
    const DelEl = args.shift()
    let relese = args.join(" ")
    const user = msg.mentions.users.first()
    
    if (args.length<[1]){
      relese = `\`nie podano agrumentów!\``
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
            .addField('Czas: ','\`NA ZAWSZE!\`')
            .addField('powód:',relese)

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
            }else{
                memberTarget.roles.add(muteRole)
            }
            
            msg.channel.send(embed)
            
      }   
    }
    else {        
      msg.reply("Ten użytkownik nie jest w gildii!")
    }
  },
}
