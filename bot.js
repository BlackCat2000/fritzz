const { Client, Util } = require('discord.js');


const Discord = require("discord.js");

const YTDL = require("ytdl-core");






client.login(process.env.BOT_TOKEN);




client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("
?? ??? ??????? ???? ???? ????? ??
").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("
php\n??? ??????? ???? ?? ?????: " + textxt + "\n
").then(m => m.delete(3000));
        }
    }
}
});





client.on('message', message => {
if (message.content.startsWith("*kick")) {
    if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply(':warning: ?????? ?????????');
    var mention = message.mentions.members.first();
    if(!mention) return message.channel.send("??? ???? ?????");

    mention.kick("By: " + message.author.tag);

    message.channel.send("?? ????? ??? ??? : " + mention.tag);
};
});