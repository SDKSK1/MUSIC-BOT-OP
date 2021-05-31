const { MessageEmbed } = require("discord.js");
const { inviteURL } = require("../config.json");
module.exports = {
  name: "invite",
  description: "INVITE THE BOT IN YOUR SERVER",
  execute(client, message, args) {
    let embed = new MessageEmbed()
      .setTitle("INVITE ME OR DIE")
      .setColor("BLUE")
      .setDescription(`[CLICK ME](${inviteURL}) OR **DIE**`); //Looks Cool

    return message.channel.send(embed);
  }
};
