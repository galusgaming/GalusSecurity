const { Client } = require("discord.js");

const client = new Client
module.exports = {

    name:"ping",
    description:"Ping!",

    run (msg) {
        msg.channel.send(`🏓Latency is ${Date.now() - msg.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
    }, 
}