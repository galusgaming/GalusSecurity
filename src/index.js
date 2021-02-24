const chalk = require('chalk');
const Discord = require('discord.js');
const { prefix,token, botAuthor, botVersion, description } = require('./config/config.js');
const { Client, MessageEmbed,} = require('discord.js');
const client = new Client();
const commandHandler = require("./handlers/command.handler")

const log  = console.log

client.on('ready', () => {
  log(chalk.green(`Zalogowałeś się jako... -> `+chalk.red.bold( ` ${client.user.tag}!`)));
});


      commandHandler(client)


client.on('message', (msg) => {
  const {author,guild} = msg
  const channel = msg.channel
  if (author.bot || !guild)
  {
    return
  }

  if (msg.content.indexOf(prefix) !==0) return

  const args = msg.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g)
    const cmd = args.shift().toLowerCase()
 

  if (msg.content === '$ping') {
    msg.reply('pong');
  }

  if (cmd === "info") {
    const embed = new MessageEmbed()
    .setTitle('Informacje o Bocie')
    .setColor(0x3399ff)
    .setThumbnail('https://i.ibb.co/s32YrN3/Galus-Security-LOGO-Imgur.png')
    .setDescription(description)
    .addField('Autor', botAuthor, true)
    .addField('Wersja',botVersion,true)

    channel.send(embed)
  }

});

client.login(token)
client.on("debug", () => {})
client.on("warn", () => {})
client.on("error", () => {})
 