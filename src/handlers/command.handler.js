const {Collection} = require("discord.js")
const {readdirSync, read} = require('fs')
const ascii = require('ascii-table')
const table = new ascii().setHeading("Command","Load Satus")
const {prefix} = require(__dirname + '/../config/config.js');

 module.exports = (client) => {
    client.commands = new Collection()

    const commandFiles =  readdirSync(__dirname +"/../commands").filter(file => file.endsWith(".command.js"))
    for (const file of commandFiles) {
        const command = require(__dirname + `/../commands/${file}`)
        if (command.name) {
            client.commands.set(command.name, command)
            table.addRow(file, "✅")
        }else {
            table.addRow(file, "❌  -> missing 'name'!")
            continue
        }
    }
    console.log(table.toString())

    client.on('message', (msg) => {
        const {author,guild} = msg
        const channel = msg.channel
        if (author.bot || !guild)
        {
          return
        }
      
        if (msg.content.indexOf(prefix) !==0) return
      
        const args = msg.content
          .slice(prefix.length)
          .trim()
          .split(/ +/g)
          const cmd = args.shift().toLowerCase()

      if (!client.commands.has(cmd))return
      try{
        client.commands.get(cmd).run(msg, args)
      }catch(error){
          console.log(error)
          msg.reply ("wystąpił błąd komenda nie moze zostać uruchomiona!")
      }
 });
}