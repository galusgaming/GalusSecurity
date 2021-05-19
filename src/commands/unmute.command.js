const {ClientUser,MessageEmbed, Role, Permissions: {FLAGS} } = require("discord.js")
module.exports = {
  name: "unmute",
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
            let memberTarget= msg.guild.members.cache.get(target.id)
            let muteRole= msg.guild.roles.cache.find(role => role.name === 'Wyciszony/a' )
            let avatar = target.displayAvatarURL({size: 256})
            const embed = new MessageEmbed()
            .setTitle('Użytkownik Odciszony!')
            .setColor(0x00FF00)
            .setThumbnail(avatar)
            .addField('Administartor:', author)
            .addField('Użytkownik:',target)
            .addField('powód:',relese)

            if (!memberTarget.roles.cache.some(role => role.name === 'Wyciszony/a')) {
                try{
                    msg.reply("**Ten gracz nie jest zmutowany!**")
                }catch(error){
                    console.log(error)
                }
                return
            }else memberTarget.roles.remove(muteRole)
            
            
            msg.channel.send(embed)
            
      }   
    }
    else {        
      msg.reply("Ten użytkownik nie jest w gildii!")
    }
  },
}
