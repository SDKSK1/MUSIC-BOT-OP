const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const { COLOR } = require("../config.json");
module.exports = {
  name: "help",
  description: "GET ALL COMMANDS NAME AND DESCRIPTIONG",
  execute(client, message, args) {
    let embed = new MessageEmbed()
      .setAuthor("HELP SECTION", client.user.displayAvatarURL())
      .setThumbnail(client.user.displayAvatarURL())
      .setColor(COLOR)
      .setDescription(`THESE ARE THE COMMAND ${client.user.username}`);
    let command = readdirSync("./commands");

    let i;
    for (i = 0; i < command.length; i++) {
      console.log(command[i]);

      const cmd = client.commands.get(command[i].replace(".js", ""));
      embed.addField(`**${cmd.name}**`, cmd.description, true);
    }

    message.channel.send(embed);
  }
};
