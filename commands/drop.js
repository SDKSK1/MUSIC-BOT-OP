const { MessageEmbed } = require("discord.js");
const { COLOR } = require("../config.json");
module.exports = {
  name: "drop",
  description: "DROP THE SONG FROM QUEUE",
  execute(client, message, args) {
    let embed = new MessageEmbed().setColor(COLOR);
    const { channel } = message.member.voice;
    if (!channel) {
      embed.setAuthor("YOU ARE NOT IN VOICE CHANNEL");
      return message.channe.send(embed);
    }

    const serverQueue = client.queue.get(message.guild.id);

    if (!serverQueue) {
      embed.setAuthor("THE QUE IS EMPTYT");
      return message.channel.send(embed);
    }

    if (isNaN(args[0])) {
      embed.setAuthor("PLEASE USE NUMBERICAL VALUES ONLY");
      return message.channel.send(embed);
    }

    if (args[0] > serverQueue.songs.length) {
      embed.setAuthor("UNABLE TO FIND THIS SONG");
      return message.channel.send(embed);
    }

    serverQueue.songs.splice(args[0] - 1, 1);
    embed.setDescription("DROPED THE SONG FROM QUEUE");
    embed.setThumbnail(client.user.displayAvatarURL());
    return message.channel.send(embed);
  }
};
