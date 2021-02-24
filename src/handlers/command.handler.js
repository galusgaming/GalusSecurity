const {Collection} = require("discord.js")
const {readdirSync, read} = require('fs')
const ascii = require('ascii-table')
const table = new ascii().setHeading("Command","Load Satus")

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
}