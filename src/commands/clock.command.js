const { Permissions: {FLAGS} } = require("discord.js")
module.exports = {
  name: "clock",
  description: "Clock command.",
  args: true,
  guildOnly: true,
  usage: "<action>[add]",
  botPermissions: [FLAGS.MANAGE_MESSAGES],
  userPermissions: [FLAGS.MANAGE_MESSAGES],
  async run(msg, args) {
    const { channel, guild, client } = msg
    args[0].toLowerCase()
    if (args[0] === "ADD".toLowerCase()){
    const time = new Date().toLocaleTimeString('pl-PL').slice(0, 5)
    //const time = new Date().toLocaleTimeString()
    const channelName = `🕥 ${time}`

    const createdChannel = await guild.channels.create(channelName, {
      type: "voice",
    })

    if (createdChannel) {
      const channelId = createdChannel.id

      const { settings } = client
      // Save channel id to config
      if (!settings.get(guild.id)) {
        settings.set(guild.id, { clocks: [] })
      }
      client.settings.get(guild.id).clocks.push(channelId)
      client.saveConfig(guild.id)
    }
  }else {
    return msg.reply("podaj właściwy argument!")
  }
  },
}
