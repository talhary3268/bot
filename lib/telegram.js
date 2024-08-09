const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config()
// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.TELEGRAM_TOKEN;
const bot = new TelegramBot(token, { polling: true });


bot.onText(/\/start/, async (msg) => {
    console.log('start');
    const chatId = msg.chat.id;
    const telegramId = msg.from.id;
    try {
        await bot.sendMessage(chatId, 'Welcome to my bot', {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Open web app ', web_app: { url: 'https://hamsterkombat-26d63decbfe0.herokuapp.com/' } }]
                ]
            }
        });
    } catch (e) {
        console.log(e);
    }
});
