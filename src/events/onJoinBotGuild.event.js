module.exports = {
    name: "guildCreate",

    async run(guild) {
      const {client} = guild
        const { settings } = client
        let guildID = await guild.id
        // Save channel id to config
        if (!settings.get(guildID)) {
          settings.set(guildID, { clocks:[], Prefix: null })
        }
        
        client.saveConfig(guildID)
    
    }
}