const { MessageEmbed } = require("discord.js")
const ayarlar = require('../../ayarlar.json');
var version = ayarlar.versionbot;
var roleID = ayarlar.roleID;
var img = ayarlar.img;

module.exports = {
    name: 'attack',
    description: 'SPAM SMS',
    type: 'CHAT_INPUT',
    cooldown: 30,
    options: [
    {
      name: "phone",
      description: "SĐT muốn Spam",
      required: true,
      type: "STRING",
    },
  ],

  run: async (client, interaction) => {

    if (!interaction.member.roles.cache.has(roleID))
      return interaction.reply({
        embeds: [
          new MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`Chỉ có <@&${roleID}> mới được dùng lệnh này.`)
            .setFooter({ text: "© Developer: Nguyễn Xuân Trường#8891" })
            .setTimestamp(),
        ],
      });

    const phone = interaction.options.getString("phone")

    var exec = require('child_process').exec
      exec(`py sms.py ${phone} 1 100`, (error, stdout, stderr) => {
    });

    console.log('Một cuộc tấn công khởi chạy ID Discord:' +  interaction.guild.id)
      const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(version)
        .addFields(
          {
            name: "`👨‍💻 Người Dùng:`",
            value: `\n  ${interaction.user.username}  \n`,
            inline: true,
          },
          {
            name: "`💥 Mục tiêu:`",
            value: `\n  ${phone}  \n`,
            inline: true,
          },
          {
            name: "`🕒 CoolDown:`",
            value: `\n  CoolDown 120 giây  \n`,
            inline: true,
          })
        .setFooter('© Developer: Nguyễn Xuân Trường#8891', img)
        .setTimestamp();
          const countdownEmbed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle(version)
            .setDescription("ĐANG LOAD COOLDOWN...")
            .setImage("https://cdn.discordapp.com/attachments/1032269044952354817/1035539812331028560/LOADING.gif")
            .setFooter('© Developer: Nguyễn Xuân Trường#8891', img)
            .setTimestamp()
          interaction.reply({ embeds: [countdownEmbed] }).then((message) => {
              setTimeout(function () {
                interaction.editReply({ embeds: [embed] });
              }, 10)
            })
    }
}