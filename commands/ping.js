//FIRST TEST HANDLER IS WORKING OR NOT
const Discord = require("discord.js");
module.exports = {
  name: "ping",
  description: "YOU'RE PING",
  execute(client, message, args) {
    let ping = new Discord.MessageEmbed()
      .setTitle(`✅|CLIENT LATENCY`)
      .setDescription(`${client.ws.ping}ms`);
    message.channel.send(ping);
  }
};
