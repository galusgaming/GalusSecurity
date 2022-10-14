const cron = require('node-cron');
const { Client } = require("discord.js")
const chalk = require("chalk")
//const mongoose = require("mongoose")
//const User = require("./schemas/userSchema")
const { token } = require("./config/config.js")

const client = new Client()
//const mongo = require("./mongo")
const commandHandler = require("./handlers/command.handler")
const settingsHandler = require("./handlers/settings.handler")
const eventHandler = require("./handlers/event.handler.js")

const log = console.log
const {guild} = client
// Initialize Comamnd Manager
commandHandler(client)
// Initialize Settings Manager
settingsHandler(client)

eventHandler(client)
  client.on("ready", async () => {
    log(chalk.green(`Zalogowałeś się jako... -> `+chalk.red.bold( ` ${client.user.tag}!`)));


    client.user.setPresence({ activity: { name: '*Jeśli potrzebujesz pomoocy użyj ?help*',type:'WATCHING' }, status: 'dnd' })

    // Initialize interval for each guild
    client.settings.forEach((config, guildId) => {

      const { guilds } = client

    // Check if guild exist
      if (guilds.cache.has(guildId)) {
        const guild = guilds.cache.get(guildId)
        // Check if available
        if (guild.available) {
          // console.log("available")

          // Set Interval for each channel
          const clockChannels = config.clocks
          setInterval(() => {
            const time = new Date().toLocaleTimeString().slice(0, 5)
            const channelName = `🕥 ${time}`

            clockChannels.forEach((channelId, index) => {
              // Check if channel exists
              if (guild.channels.cache.has(channelId)) {
                // log("channel exist")
                const channelToUpdate = guild.channels.cache.get(channelId)
                channelToUpdate.setName(channelName)
              } else {
                log("not exist")
                // Remove Id from config

                // that does not exist?
                clockChannels.splice(index, 1)
                client.saveConfig(guildId)
              }
            })
          }, 1000)
        }
      }
      client.saveConfig(guildId)
    })


    /*await mongo().then((mongoose) => {
      try {
        console.log('Connected to mongo!')
      } finally {
        mongoose.connection.close()
      }
    })*/
  })


  
  // Connect with Discord
  client.login(token)

  // Error handler - omit crashed
  client.on("debug", () => {})
  client.on("warn", () => {})
  client.on("error", () => {})
