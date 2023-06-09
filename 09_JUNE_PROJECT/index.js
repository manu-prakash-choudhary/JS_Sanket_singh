// 30 minutes left for the video named 5. Project
// BotLink : http://t.me/coding_manu_bot
// BotUserName : coding_manu_bot
// BotName : coding_bot_manu

// 1. Import telegraf
const { Telegraf } = require('telegraf');

// 2. Create a bot using the token provided by BotFather
// const Bot = new Telegraf('YOUR_TOKEN');
const bot = new Telegraf('5705838954:AAGJNoNY8Xl8Ok9skMA4kTMZk5Jehr6oeLY');



bot.start((ctx) => { ctx.reply('Chl na be laude') });
bot.help((ctx) => { ctx.reply('10 rupaye doge toh ek raaj ki baat btaunga') });

// 3. Start the bot using bot.launch() method
bot.launch();

