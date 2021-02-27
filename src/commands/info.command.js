const {MessageEmbed,} = require('discord.js');
const {botAuthor, botVersion, description} = require(__dirname + '/../config/config.js')
module.exports = {
    name:"info",
    description:"displays a information about bot!",

    run (msg) {
            const {channel} = msg
            const embed = new MessageEmbed()
            .setTitle('Informacje o Bocie')
            .setColor(0x3399ff)
            .setThumbnail('https://i.ibb.co/s32YrN3/Galus-Security-LOGO-Imgur.png')
            .setDescription(description)
            .addField('Autor', botAuthor, true)
            .addField('Wersja',botVersion,true)
        
            channel.send(embed)

},
}