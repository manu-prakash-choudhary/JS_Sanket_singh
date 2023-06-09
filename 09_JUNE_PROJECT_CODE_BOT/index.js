// 30 minutes left for the video named 5. Project
// BotLink : http://t.me/coding_manu_bot
// BotUserName : coding_manu_bot
// BotName : coding_bot_manu

// 1. Import telegraf
const { Telegraf } = require('telegraf');

// 2. Create a bot using the token provided by BotFather
// const Bot = new Telegraf('YOUR_TOKEN');
const bot = new Telegraf('5705838954:AAGJNoNY8Xl8Ok9skMA4kTMZk5Jehr6oeLY');



bot.start((ctx) => {
    ctx.reply(`Chl na be laude
/commands likh ke dekh`);
});
bot.help((ctx) => {
    ctx.reply(`
/binarySearchJs
/bubbleSortJs
/insertionSortJs
/selectionSortJs
/quickSortJs
/mergeSortJs
/linearSearchJs
/start
/help
/commands
    `)
});

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

// show the list of commands while user types /commands
bot.command('commands', (ctx) => {
    ctx.reply(`
/binarySearchJs
/bubbleSortJs
/insertionSortJs
/selectionSortJs
/quickSortJs
/mergeSortJs
/linearSearchJs
/start
/help
/commands
    `);
});

bot.command('bubbleSortJs', (ctx) => {
    ctx.reply(`
    function bubbleSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            // swap
            const temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
        }
    }
    return arr;
    }
    `);
});

bot.command('insertionSortJs', (ctx) => {
    ctx.reply(`
    function insertionSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        let el = arr[i];
        let j;

        for (j = i - 1; j >= 0 && arr[j] > el; j--) {
        arr[j + 1] = arr[j];
        }
        arr[j + 1] = el;
    }
    return arr;
    }
    `);
});

bot.command('selectionSortJs', (ctx) => {
    ctx.reply(`
    function selectionSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
        if (arr[min] > arr[j]) {
            min = j;
        }
        }
        if (min !== i) {
        // swap
        let tmp = arr[i];
        arr[i] = arr[min];
        arr[min] = tmp;
        }
    }
    return arr;
    }
    `);
});

bot.command('quickSortJs', (ctx) => {
    ctx.reply(`
    function quickSort(arr, left = 0, right = arr.length - 1) {
    let len = arr.length,
        index;

    if (len > 1) {
        index = partition(arr, left, right);

        if (left < index - 1) {
        quickSort(arr, left, index - 1);
        }

        if (index < right) {
        quickSort(arr, index, right);
        }
    }

    return arr;
    }

    function partition(arr, left, right) {
    let middle = Math.floor((right + left) / 2),
        pivot = arr[middle],
        i = left,
        j = right;

    while (i <= j) {
        while (arr[i] < pivot) {
        i++;
        }

        while (arr[j] > pivot) {
        j--;
        }

        if (i <= j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
        }
    }

    return i;
    }
    `);
});

bot.command('mergeSortJs', (ctx) => {
    ctx.reply(`
    function mergeSort(arr) {

    if (arr.length === 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle); // left part of array
    const right = arr.slice(middle); // right part of array

    return merge(
        mergeSort(left),
        mergeSort(right)
    );
    }

    function merge(left, right) {
    let result = [];
    let indexLeft = 0;
    let indexRight = 0;

    while (indexLeft < left.length && indexRight < right.length) {
        if (left[indexLeft] < right[indexRight]) {
        result.push(left[indexLeft]);
        indexLeft++;
        } else {
        result.push(right[indexRight]);
        indexRight++;
        }
    }

    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
    }
    `);

});

bot.command('linearSearchJs', (ctx) => {
    ctx.reply(`
    function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
        return i; // return the index of the element
        }
    }
    return -1; // target element not found
    }
    `);
});
   



// add auto complete feature while typing commands
bot.hears('hello', (ctx) => {
    ctx.reply(`
    Hello ${ctx.from.username} 
    `);
});



// Start the bot using bot.launch() method
bot.launch();



