const { MessageEmbed, Collection } = require("discord.js");
const config = require("../config/config");
const ee = require("../config/embed.json");
module.exports = {
    name: "help",
    aliases: ["h", "commandinfo", "cmds", "cmd"],
    cooldown: 4,
    description: "Returns all Commmands, or one specific command",
    run: (client, message, args, user, text, prefix) => {

      const cmdList = new Collection()


      if (!args) {
        const embed = new MessageEmbed();
        const cmd = client.commands.get(args[0].toLowerCase()) || client.commands.get(client.aliases.get(args[0].toLowerCase()));
        if (!cmd) {
            return message.channel.send(embed.setColor(ee.wrongcolor).setDescription(`No Information found for command **${args[0].toLowerCase()}**`));
        }
        if (cmd.name) embed.addField("**Komenda :**", `\`${cmd.name}\``);
        if (cmd.name) embed.setTitle(`Szczegółowe informacje o:\`${cmd.name}\``);
        if (cmd.description) embed.addField("**Opis**", `\`${cmd.description}\``);
        if (cmd.aliases) embed.addField("**aliasy**", `\`${cmd.aliases.map((a) => `${a}`).join("`, `")}\``);
        if (cmd.cooldown) embed.addField("**Cooldown**", `\`${cmd.cooldown} Seconds\``);
        else embed.addField("**Cooldown**", `\`${config.defaultCommandCooldown}\``);
        if (cmd.usage) {
            embed.addField("**Użycie**", `\`${config.prefix}${cmd.usage}\``);
            embed.setFooter("Składnia: <> = required, [] = optional");
        }
         if (cmd.usage) {
            embed.addField("**Użycie**", `\`${config.prefix}${cmd.usage}\``);
            embed.setFooter("Składnia: <> = required, [] = optional");
        }
        return message.channel.send(embed.setColor(ee.color));
      } else {
        const embed = new MessageEmbed()
            .setColor(ee.color)
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle("HELP MENU 🔰 Komendy")
            .setFooter(`Żeby zobaczyć opis i inne informacje, wpisz: ?help [CMD NAME]`, client.user.displayAvatarURL());
        const commands = (category) => {
            return client.commands.map((cmd) => `\`${cmd.name}\``);
        };

            embed.addField(`**${current.toUpperCase()} [${items.length}]**`, `> ${result[0].join("\n> ")}`, true);
            embed.addField(`\u200b`, `${result[1].join("\n") ? result[1].join("\n") : "\u200b"}`, true);
            embed.addField(`\u200b`, `${result[2].join("\n") ? result[2].join("\n") : "\u200b"}`, true);
          }
     
      }
    }
