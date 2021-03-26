const {MessageEmbed, Permissions: {FLAGS} } = require("discord.js");
const { botAuthor } = require("../config/config");
module.exports = {
  name: "clear",
  description: "Clear number of messages in specific channel.",
  args: true,
  usage: "<amount>",
  botPermissions: [FLAGS.MANAGE_MESSAGES],
  userPermissions: [FLAGS.MANAGE_MESSAGES],

  run(msg, args) {
    author = msg.author 
    const { channel, member, guild } = msg
    const amountArg = parseInt(args[0])
    const embed = new MessageEmbed()
    .setTitle("CZAT WYCZYSZCZONY!")
    .setDescription(`czat został wyczyszczony przez: ${author}`)
    .setColor(0x00abff)
    .addField("Ilość:", `*${amountArg} wiadomości*`, true)
    .setFooter(`bot stworzony przez: ${botAuthor}`)
    
  
    if (!Number.isInteger(amountArg)) {
      return channel.send("You must specify the amount of messages to clear!")
    }

    if (amountArg < 2 || amountArg >= 100) {
      return channel.send(
        "Amount of messages to clear must be greater than 1 and lower than 100.",
      )
    }

    channel.bulkDelete(amountArg)
    channel.send(embed)
  },
}
