const { MessageEmbed, Permissions: {FLAGS} } = require("discord.js")
module.exports = {
    name: "help",
    description:
      "List all commands the bot has or info about a specific command.",
    usage: "[command name]",
    guildOnly:true,
    cooldown: 5,
  
    run(msg, args) {
      const { client: { commands },} = msg
  
      const data = []
      const { channel, guild, client } = msg
      const { settings } = client
  
      if (!settings.get(guild.id)) {
        
      }
      
      let Prefix = client.settings.get(guild.id).Prefix
      let prefix
      if (prefix=='null'){
          prefix='?'
      }else{
        prefix=Prefix
      }
      
      // =====================================
      //
      // No arguments provided
      //
      // =====================================
      if (!args.length) {
        // Create list with all commands
        data.push("To jest lista moich komend:`")
        data.push(commands.map((command)  => command.name).join("`,`"))
        data.push(
          `\`\nMożesz wysłać \`${prefix}help [command name]\` po dokłaniejsze informacje o komendzie!`,
        )
  
        return msg.author
          .send(data, { split: true })
          .then(() => {
            if (msg.channel.type === "dm") return
            const embed = new MessageEmbed()
                .setColor('#0099ff')
                .setTitle("To jest lista moich komend:")
                .setAuthor('GalusGaming#4096', msg.author.avatarURL())
                .setDescription(commands.map((command)  => "`" + command.name).join("`,") + "`")
                .setThumbnail('https://i.ibb.co/s32YrN3/Galus-Security-LOGO-Imgur.png')
                .addFields(
                    { name: 'title', value: `Możesz wysłać \`?help [command name]\` po dokłaniejsze informacje o komendzie!`, inline: false },
                )
                .setTimestamp('timestamp')
                .setFooter('Designed by GalusGaming#4096', 'https://i.ibb.co/s32YrN3/Galus-Security-LOGO-Imgur.png');
            
                channel.send(embed);
          })
          .catch((err) => {
            console.error(`nie mogłem wysłać wiadomości do ${msg.author.tag}.\n`, err)
            msg.reply(`Widzę, że nie mogę wysłać wiadomości \n skontaktuj sie z owenerem GalusGaming#4096`)
          })
      }
  
      // =====================================
      //
      // Arguments provided
      //
      // =====================================
      const name = args[0].toLowerCase()
      const command =
        commands.get(name) ||
        commands.find((c) => c.aliases && c.aliases.includes(name))
  
      if (!command) {
        return msg.reply("that's not a valid command!")
      }
  
      data.push(`**Name:** ${command.name}`)
  
      if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(", ")}`)
      if (command.description)
        data.push(`**Description:** ${command.description}`)
      if (command.usage)
        data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`)
  
      data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`)
  
      msg.channel.send(data, { split: true })
    },
}