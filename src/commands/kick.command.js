const {MessageEmbed, Permissions: {FLAGS}} = require("discord.js")
module.exports = {
    name: "kick",
    description: "baning  members",
    args: true,
    usage: "<member>",
    botPermissions: [FLAGS.KICK_MEMBERS],
    userPermissions: [FLAGS.KICK_MEMBERS],
  
    run(msg, args) {

        author = msg.author
        const {channel} = msg
     if (!msg.guild) return
        const {guild} = msg
        const DelEl = args.shift()
        let relese = args.join(" ")
        const user = msg.mentions.users.first()
        
        if (args.length<[1]){
          relese = `\`nie podano agrumentów!\``
        }
        
       if (user) {
          const member = guild.member(user)
          if (member) {
            let avatar = user.displayAvatarURL({size: 256})
            const embed = new MessageEmbed()
            .setTitle('Użytkownik Wyrzucony!')
            .setColor(0xFF0000)
            .setThumbnail(avatar)
            .addField('Administartor:', author)
            .addField('Użytkownik:',user)
            .addField('powód:',relese)
            
    
            member
              .kick([relese]).then(() => {
                msg.channel.send(embed)
              })
              .catch(err => {          
                msg.reply('I was unable to ban the member')            
                console.error(err);
              });
          } 
          
        }else {        
          msg.reply("Ten użytkownik nie jest w gildii!")
        }
      },
}
