const { MessageEmbed } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
    name: "help",
    aliases: ["h", "commandinfo", "cmds", "cmd"],
    args:true,
    cooldown: 4,
    description: "Returns all Commmands, or one specific command",
    run: async (client, message, args, user, text, prefix) => {
      try{
        if (args[0]) {
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
              .setFooter(`Żeby zobaczyć opis i inne informacje, wpisz: ${config.prefix}help [CMD NAME]`, client.user.displayAvatarURL());
          const commands = (category) => {
              return client.commands.filter((cmd) => cmd.category === category).map((cmd) => `\`${cmd.name}\``);
          };
          try {
            for (let i = 0; i < client.categories.length; i += 1) {
              const current = client.categories[i];
              const items = commands(current);
              const n = 3;
              const result = [[], [], []];
              const wordsPerLine = Math.ceil(items.length / 3);
              for (let line = 0; line < n; line++) {
                  for (let i = 0; i < wordsPerLine; i++) {
                      const value = items[i + line * wordsPerLine];
                      if (!value) continue;
                      result[line].push(value);
                  }
              }
              embed.addField(`**${current.toUpperCase()} [${items.length}]**`, `> ${result[0].join("\n> ")}`, true);
              embed.addField(`\u200b`, `${result[1].join("\n") ? result[1].join("\n") : "\u200b"}`, true);
              embed.addField(`\u200b`, `${result[2].join("\n") ? result[2].join("\n") : "\u200b"}`, true);
            }
          } catch (e) {
              console.log(String(e.stack).red);
          }
          message.channel.send(embed);
      }
    } catch (e) {
        console.log(String(e.stack).bgRed)
        return message.channel.send(new MessageEmbed()
            .setColor(ee.wrongcolor)
            .setFooter(ee.footertext, ee.footericon)
            .setTitle(`❌ ERROR | An error occurred`)
            .setDescription(`\`\`\`${e.stack}\`\`\``)
        );
    }
  }
}

/** Template by Tomato#6966 | https://github.com/Tomato6966/Discord-Js-Handler-Template */
