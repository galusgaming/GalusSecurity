const { Client } = require("discord.js");

const client = new Client
module.exports = {

    name:"ping",
    description:"Ping!",

    run (msg) {
        msg.channel.send(`**🏓Ping Wynosi ${Date.now() - msg.createdTimestamp}ms**`);
    }, 
}