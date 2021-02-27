const chalk = require('chalk');
const Discord = require('discord.js');
const {token} = require('./config/config.js');
const { Client, MessageEmbed,} = require('discord.js');
const client = new Client();
const commandHandler = require("./handlers/command.handler")

const log  = console.log

client.on('ready', () => {
  log(chalk.green(`Zalogowałeś się jako... -> `+chalk.red.bold( ` ${client.user.tag}!`)));
});

commandHandler(client)
client.login(token)
client.on("debug", () => {})
client.on("warn", () => {})
client.on("error", () => {})
 