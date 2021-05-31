const { MessageEmbed } = require("discord.js");

const { COLOR } = require("../config.json");
module.exports = {
  name: "volume",
  description: "MANAGE THE VOLUME OF THE SONG",
  execute(client, message, args) {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send(
        "YOU ARE NOT ALLOWED TO CHANGE THE VOLUME OF MUSICC"
      );
    }

    let embed = new MessageEmbed().setColor(COLOR);

    const { channel } = message.member.voice;
    if (!channel) {
      //fuck you
      embed.setAuthor("YOU NEED TO BE IN VOICE CHANNEL");
      return message.channel.send(embed);
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      embed.setAuthor("BOT IS NOT PLAYING ANYTHING");
      return message.channel.send(embed);
    }

    if (!args[0]) {
      embed.setAuthor(`The Current Volume is ${serverQueue.volume}`);
      return message.channel.send(embed);
    }

    if (isNaN(args[0])) {
      embed.setAuthor("PLEASE USE NUMBERICAL VALUES ONLY");
      return message.channel.send(embed);
    }

    if (args[0] > 200) {
      embed.setAuthor("YOU WILL DIE IF YOU REACH THE LIMIT OF 200");
      return message.channel.send(embed);
    }

    serverQueue.volume = args[0];
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);
    embed.setDescription(`✅|SETED VOLUME TO ${args[0]}`);
    embed.setThumbnail(client.user.displayAvatarURL());
    message.channel.send(embed);
  }
};
