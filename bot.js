const TelegramApi = require('node-telegram-bot-api')
const {gameOptions, againOptions} = require('./options.js')
const token = '6453272163:AAFIg0HB4tR8R8u6rNr4OVw_O-uBaH-YOaI';

const bot = new TelegramApi(token, {polling: true})

const chats = {};


const startGame = async (chatId) => {
    await bot.sendMessage(chatId, `Сейчас я загадаю цифру от 0 до 9, а ты должен угадать)`)
    const randomNumber =  Math.floor(Math.random() * 10);
    chats[chatId] = randomNumber;
    await bot.sendMessage(chatId, 'Отгайдывай', gameOptions);
}

const start = () => {
    bot.setMyCommands([
        {command: '/start', description: 'Начально приветствие '},
        {command: '/info', description: 'Получение игформации о пользователе'},
        {command: '/game', description: 'игры '}
    ]);
    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;
    
        if(text === '/start'){
            return bot.sendMessage(chatId, `Добро пожаловать!`)
        }
        if(text === '/info'){
            return bot.sendMessage(chatId, `Your name is ${msg.from.first_name} ${msg.from.last_name}`)
        }
        if(text === '/game'){
            return startGame(chatId)
        }   
        return bot.sendMessage(chatId, 'Такой команды нет')
    })

    bot.on('callback_query', async msg => {
        const data = msg.data;
        const chatId = msg.message.chat.id;
        if(data === '/again'){
            return startGame(chatId)
        }
        if(data === chats[chatId]){
            return bot.sendMessage(chatId, `Ты выигрыл ${chats[chatId]}`, againOptions)
        } else {
            return bot.sendMessage(chatId, `Ты не угадал, бот загадал цифру ${chats[chatId]}`, againOptions)
        }
    })
}
start()