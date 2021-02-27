const {prefix} = require(__dirname + '/../config/config.js')
module.exports = {
    name:"clear",
    description:"This command is used to cleaning chat . ",

    run (msg,args) {
        const {channel} = msg
        const amount = parseInt(args[0])

        if (!Number.isInteger(amount)) {
            return channel.send("coś poszło nie tak, argument musi być cyfrą!"), 
            channel.send('`' + `sprawdź poprawne użycie za pomocą ${prefix}help ${this.name}` + '`')
        }

        console.log(amount)

        msg.reply(amount)
    },
}