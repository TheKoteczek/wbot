const { Client, Message, MessageEmbed } = require('discord.js');
var ee = require('../../config/embed.json');
var config = require('../../config/config.json');

module.exports = {
    name: 'avatar',
    aliases: ['av', 'pfp'],
    category: 'Informacyjne',
    memberpermissions: [],
    cooldown: 5,
    description: 'Show User Avatar',
    usage: 'avatar [@USER] [global]',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, prefix) => {
        try {
            var user = message.mentions.users.first() || message.author;

            message.channel.send( new MessageEmbed()
 .setColor(ee.color)
            .setTitle(`Avatar użytkownika: ${user.tag}`, user.displayAvatarURL({ dynamic: true }))
                .addField("❱ PNG", `[\`LINK\`](${user.displayAvatarURL({ format: "png" })})`, true)
                .addField("❱ JPEG", `[\`LINK\`](${user.displayAvatarURL({ format: "jpg" })})`, true)
                .addField("❱ WEBP", `[\`LINK\`](${user.displayAvatarURL({ format: "webp" })})`, true)
                .setFooter(ee.footertext, ee.footericon)
                .setImage(user.displayAvatarURL({
                    dynamic: true, size: 512,
                }))
            );

        } catch (e) {
            message.channel.send(
                 new MessageEmbed()
                .setColor(ee.color)
                    .setDescription(e)
            )
        }
    }
}