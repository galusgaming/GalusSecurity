const { Permissions: {FLAGS} } = require("discord.js");
module.exports = {
  name: "clear",
  description: "Clear number of messages in specific channel.",
  args: true,
  usage: "<amount>",

  run(msg, args) {
    author = msg.author 
    const { channel, member, guild } = msg
    const amountArg = parseInt(args[0])

    if (!member.permissionsIn(channel).has([FLAGS.MANAGE_MESSAGES])) {
      return channel.send( `${author} nie masz permisjii, żeby użyć tej komendy!`)
      
  }

    if (!Number.isInteger(amountArg)) {
      return channel.send("You must specify the amount of messages to clear!")
    }

    if (amountArg < 2 || amountArg >= 100) {
      return channel.send(
        "Amount of messages to clear must be greater than 1 and lower than 100.",
      )
    }

    channel.bulkDelete(amountArg)
    channel.send(`Czas został wyczyszczony przez: ${author}` )
  },
}
