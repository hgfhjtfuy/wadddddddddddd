const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("532278755553443852")
setInterval(function() {
channel.send(`wdadawsd`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
