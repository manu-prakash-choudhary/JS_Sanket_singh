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
bot.help((ctx) => { ctx.reply('10 rupaye doge toh ek raaj ki baat btaunga')});

bot.command('binarySearchJs', (ctx) => {
    ctx.reply(`
    function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (arr[mid] === target) {
            return mid; // Found the target, return the index
        } else if (arr[mid] < target) {
            low = mid + 1; // Target is in the right half of the array
        } else {
            high = mid - 1; // Target is in the left half of the array
        }
    }

    return -1; // Target was not found in the array
}

// Usage example
const sortedArray = [2, 4, 6, 8, 10, 12, 14, 16];
const targetValue = 10;

const result = binarySearch(sortedArray, targetValue);

if (result !== -1) {
    console.log('The target value', targetValue, 'is found at index', result);
} else {
    console.log(The target value, targetValue, 'is not found in the array.');
}
`);
});

// 3. Start the bot using bot.launch() method
bot.launch();



