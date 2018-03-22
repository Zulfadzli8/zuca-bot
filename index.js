const Discord =require('discord.js');
const bot = new Discord.Client();

bot.on('message',(message) => {

    if(message.content == '<?hello'){
       // message.reply('pong');
       message.channel.sendMessage('Hello');
        }

    if (message.content == '<?ping') {
        message.channel.sendMessage('Pong! Your ping is `' + `${Date.now() - message.createdTimestamp}` + ' ms`');
        }
        
});



client.login(process.env.BOT_TOKEN);
