module.exports = {
  name: "guildCreate",

  async run(guild) {
      const client = guild.me.client;
      const { settings } = client
      // Save channel id to config
      if (!settings.get(guild.id)) {
        settings.set(guild.id, { clocks:[], Prefix:[], verChannel: null, verRole: null })
      }
      
      client.saveConfig(guild.id)
  
  }
}