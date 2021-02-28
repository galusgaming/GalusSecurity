module.exports = {
  name: "clear",
  description: "Clear number of messages in specific channel.",
  args: true,
  usage: "<amount>",

  run(msg, args) {
    const { channel } = msg
    const amountArg = parseInt(args[0])

    if (!Number.isInteger(amountArg)) {
      return channel.send("You must specify the amount of messages to clear!")
    }

    if (amountArg < 2 || amountArg >= 100) {
      return channel.send(
        "Amount of messages to clear must be greater than 1 and lower than 100.",
      )
    }

    channel.bulkDelete(amountArg)
  },
}
