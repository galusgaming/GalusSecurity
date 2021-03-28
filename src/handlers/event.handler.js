const { readdirSync } = require("fs")
const ascii = require("ascii-table")
const chalk = require("chalk")
const {Constants: {Events}} = require("discord.js")


const serverEvents = Object.values(Events)

module.exports = (client) => {
    const events = readdirSync(__dirname + "/../events").filter((file) =>
    file.endsWith(".event.js"),
  )  
    for (const file of events) {
        const event = require(__dirname + `/../events/${file}`)
        if(!event.run) {
            console.log(chalk.redBright.bold(`event o nazwie '${file}' nie wykrywa funkcji run()! sprawdz dany plik!`));
            process.exit(1)
        }else if(typeof event.run !== 'function'){
            console.log(chalk.redBright.bold(`event o nazwie '${file}' nie wykrywa funkcji run()! sprawdz dany plik!`));
            process.exit(1)
        }
        if (serverEvents.includes(event.name)){
            client.on(event.name, event.run)  
        }else {
            console.log(chalk.redBright.bold(`event o nazwie '${file}' ma nie poprawną nazwe eventu!`));
            process.exit(1)
        }
    }
    
} 