module.exports = {
    name:"clock",
    description:"Wyświetla zegar!",
    args: true,
    guildOnly: true,
    usage: "<action>[add/remove]",

    run (msg, args) {
        const {channel, guild} =msg
    
        const time =new Date().toLocaleTimeString().slice(0,5)
        const channelName =  "⌚"

        guild.createChannel(channelName)
    },
}