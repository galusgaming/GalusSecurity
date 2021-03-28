const { PREFIX, prefix } = require("../config/config.js")
const {
  Permissions: { FLAGS },
} = require("discord.js")

module.exports = {
  name: "prefix",
  description:
    "Change guild prefix. If no arguments are passed it will display actuall guild prefix.",
  guildOnly: true,
  usage: "[prefix]",
  botPermissions: [FLAGS.SEND_MESSAGES],
  userPermissions: [FLAGS.ADMINISTRATOR],

  async run(msg, args) {
    const { channel, guild, client } = msg

    const prefixArg = args[0]

    const { settings } = client

    // Save channel id to config
    if (!settings.get(guild.id)) {
      settings.set(guild.id, { clocks: [], prefix: null })
    }

    // No prefix found.
    // Display actual prefix
    if (!prefixArg) {
      let Prefix = client.settings.get(guild.id).Prefix
      if (!Prefix) Prefix = prefix
      channel.send(`Guild prefix \`${Prefix}\`.`)
    } else {
      client.settings.get(guild.id).Prefix = prefixArg
      client.saveConfig(guild.id)
      channel.send(`Guild prefix changed to \`${prefixArg}\`.`)
    }
  },
}
