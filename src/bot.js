require('dotenv').config();

// console.log(process.env.DISCORDJS_BOT_TOKEN);

const { Client } = require('discord.js');
const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
client.on('ready', () => {
    console.log('Bot online');
});

client.on('messageCreate', (message) => {
    if (message.author.bot === true) return;
    if (message.content.toLowerCase().includes('coffee')) {
        message.channel.send({content: 'FRESH PAAAAAWWWWWWTS!', files: ["https://i.imgur.com/Zcb020E.png"]});
    }
});

client.login(process.env.DISCORDJS_BOT_TOKEN);
